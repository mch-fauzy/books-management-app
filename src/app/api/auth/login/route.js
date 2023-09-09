import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { ACCESS_TOKEN_EXPIRED, createAccessToken } from "@/lib/token";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = createAccessToken({ userId: user.id });
    
    return NextResponse.json(
      {
        token
      }, {
        headers: {
          "Set-Cookie": `token=${token}; Path=/; HttpOnly; Max-Age=${ACCESS_TOKEN_EXPIRED}`
        }
      }
    );
  }
  catch (err) {
    return NextResponse.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 400,
      }
    );
  }
};
