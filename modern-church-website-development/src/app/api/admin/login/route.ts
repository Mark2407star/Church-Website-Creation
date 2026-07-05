import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// In production, store the hashed password in DB. For simplicity, we hash at startup.
let cachedHash: string | null = null;

async function getAdminHash(): Promise<string> {
  if (cachedHash) return cachedHash;
  const password = process.env.ADMIN_PASSWORD || "LivingWord2024!";
  cachedHash = await bcrypt.hash(password, 12);
  return cachedHash;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const adminUsername = process.env.ADMIN_USERNAME || "pastor";
    const adminHash = await getAdminHash();

    if (username !== adminUsername) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, adminHash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create a simple session token
    const token = Buffer.from(
      `${adminUsername}:${Date.now()}:${Math.random().toString(36).slice(2)}`
    ).toString("base64");

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
