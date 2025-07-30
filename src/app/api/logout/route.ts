import { cookies } from "next/headers";
export const POST = async (request: Request) => {
  const cookie = await cookies();
  cookie.delete("Token");
  return Response.json(null, { status: 200 });
};
