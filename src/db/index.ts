import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __lwagPool?: Pool;
  __lwagDb?: ReturnType<typeof drizzle>;
};

function createPool(): Pool {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL is required. Please set it in your environment variables."
    );
  }
  return new Pool({ connectionString: databaseUrl });
}

function getPool(): Pool {
  if (!globalForDb.__lwagPool) {
    globalForDb.__lwagPool = createPool();
  }
  return globalForDb.__lwagPool;
}

function createDb() {
  return drizzle(getPool());
}

let _db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!_db) {
    _db = createDb();
    if (process.env.NODE_ENV !== "production") {
      globalForDb.__lwagDb = _db;
    }
  }
  return _db;
}

// Lazy db — safe to import at build time, only connects when actually used
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_, prop) {
    return Reflect.get(getDb(), prop);
  },
});
