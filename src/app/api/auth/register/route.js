import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const { password: passwordDB, ...user } = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user
    });
  }
  catch (err) {
    return NextResponse.json(
      {
      message: "User already exists",  
      },
      {
        status: 400,
      }
    );
  }
};
