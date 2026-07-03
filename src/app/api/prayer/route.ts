import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { prayerRequests } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, request: prayerText, language } = body;

    if (!name || !prayerText) {
      return NextResponse.json(
        { error: "Name and prayer request are required" },
        { status: 400 }
      );
    }

    await db.insert(prayerRequests).values({
      name: name.trim(),
      email: email?.trim() || null,
      phone: phone?.trim() || null,
      request: prayerText.trim(),
      language: language || "en",
    });

    return NextResponse.json({ success: true, message: "Prayer request submitted" });
  } catch (error) {
    console.error("Prayer request error:", error);
    return NextResponse.json(
      { error: "Failed to submit prayer request" },
      { status: 500 }
    );
  }
}
