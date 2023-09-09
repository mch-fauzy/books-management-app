import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import withAuth from "@/middleware/authMiddleware";

export const GET = async (
  req,
  { params }
) => {
  try {
    const { id } = params;

    const book = await prisma.book.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json({ book });
  }
  catch (e) {
    return NextResponse.json(
      {
        message: "Something went wrong"
      },
      {
        status: 400
      }
    );
  }
}

export const PUT = withAuth(async (
  req,
  { params }
) => {
  try {
    const { id } = params;
  
    const { title, author, publisher, year, pages } = await req.json();

  
    const book = await prisma.book.update({
      where: { id: Number(id) },
      data: {
        title,
        author,
        publisher,
        year: parseInt(year),
        pages: parseInt(pages),
      },
    });

    return NextResponse.json({ book });
  }
  catch (err) {
    console.log('err', err);
    return NextResponse.json(
      {
        message: "Something went wrong"
      },
      {
        status: 400
      }
    );
  }
});

export const DELETE = withAuth(async (
  req,
  { params }
) => {
  try {
    const { id } = params;

    const book = await prisma.book.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ book });
  }
  catch (e) {
    return NextResponse.json(
      {
        message: "Something went wrong"
      },
      {
        status: 400
      }
    );
  }
});
