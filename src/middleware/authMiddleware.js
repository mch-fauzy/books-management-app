import prisma from "@/lib/prisma";

const { NextResponse } = require("next/server");
const jwt = require("jsonwebtoken");

const withAuth = (callback) => async (req, ...opt) => {
  const token = req.cookies.get('token');

  if (!token) {
    return NextResponse.json({
      message: "Not authorized"
    }, {
      status: 401
    });
  }

  const userId = jwt.decode(token.value, process.env.SECRET_KEY).userId;

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  
  if (!user) {
    return NextResponse.json({
      message: "Not authorized"
    }, {
      status: 401 
    });
  }

  req.user = user;
  
  return await callback(req, ...opt);
}

export default withAuth;
