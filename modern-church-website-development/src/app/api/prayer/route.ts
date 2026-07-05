import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { prayerRequests } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, prayerRequest, isUrgent } = body;

    if (!name || !email || !prayerRequest) {
      return NextResponse.json(
        { error: "Name, email, and prayer request are required." },
        { status: 400 }
      );
    }

    await db.insert(prayerRequests).values({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      prayerRequest: prayerRequest.trim(),
      isUrgent: !!isUrgent,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Prayer request error:", error);
    return NextResponse.json(
      { error: "Failed to submit prayer request." },
      { status: 500 }
    );
  }
}
