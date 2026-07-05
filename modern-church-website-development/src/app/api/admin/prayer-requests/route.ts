import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { prayerRequests } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get("admin_token")?.value;
  return !!token;
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
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

export async function PATCH(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, isRead } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db
      .update(prayerRequests)
      .set({ isRead })
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

export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db.delete(prayerRequests).where(eq(prayerRequests.id, parseInt(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete prayer request error:", error);
    return NextResponse.json(
      { error: "Failed to delete prayer request" },
      { status: 500 }
    );
  }
}
