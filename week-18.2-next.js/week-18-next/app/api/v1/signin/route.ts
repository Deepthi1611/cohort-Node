import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

export async function POST(request: NextRequest) {
  const data = await request.json().catch(() => ({}));

    if (!data.email || !data.password) {
        return NextResponse.json(
            { message: "email and password are required" },
            { status: 400 }
        );
    }

    const user = await prisma.user.findUnique({
        where: { email: data.email },
    });

    if (!user || user.password !== data.password) {
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    }

  const response = NextResponse.json(
    { message: "Sign in successful" },
    { status: 200 }
  );

  response.cookies.set("userId", String(user.id), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}
