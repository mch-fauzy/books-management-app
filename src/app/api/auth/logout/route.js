import { NextResponse } from "next/server";

import { deleteCookie } from "@/lib/cookie";

export const POST = async (req) => {
  deleteCookie('token');

  return NextResponse.json({
    message: 'Logout success',
  });
};
