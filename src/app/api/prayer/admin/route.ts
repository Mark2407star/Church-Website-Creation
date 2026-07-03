import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { prayerRequests } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "lwag-church-secret-key-2024"
);

async function verifyAuth(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.substring(7);
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const user = await verifyAuth(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const requests = await db
      .select()
      .from(prayerRequests)
      .orderBy(desc(prayerRequests.createdAt));

    return NextResponse.json({ requests });
  } catch (error) {
    console.error("Fetch prayer requests error:", error);
    return NextResponse.json(
      { error: "Failed to fetch prayer requests" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const user = await verifyAuth(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, isRead } = await req.json();

    await db
      .update(prayerRequests)
      .set({ isRead: isRead ? "true" : "false" })
      .where(eq(prayerRequests.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update prayer request error:", error);
    return NextResponse.json(
      { error: "Failed to update prayer request" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const user = await verifyAuth(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await req.json();

    await db.delete(prayerRequests).where(eq(prayerRequests.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete prayer request error:", error);
    return NextResponse.json(
      { error: "Failed to delete prayer request" },
      { status: 500 }
    );
  }
}
