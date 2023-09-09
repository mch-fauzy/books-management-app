import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadFile } from "@/lib/uploadFile";
import withAuth from "@/middleware/authMiddleware";

export const GET = async (req) => {
  const books = await prisma.book.findMany();
  return NextResponse.json({ books });
}

export const POST = withAuth(async (req) => {
  const formData = await req.formData();

  const image = formData.get('image');

  // Uploaded image will be saved in ./public/images
  const imagepath = await uploadFile(image, '/images');

  try {
    const book = await prisma.book.create({
      data: {
        title: formData.get('title'),
        author: formData.get('author'),
        publisher: formData.get('publisher'),
        year: parseInt(formData.get('year')),
        pages: parseInt(formData.get('pages')),
        image: 'http://localhost:3000' + imagepath
      },
    });

    return NextResponse.json({ book });
  }
  catch (err) {
    return NextResponse.json(
      {
        message: "Book already exists"
      },
      {
        status: 400
      }
    );
  }
});

