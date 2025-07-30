import { cookies } from "next/headers";
//توکن که در کوکی ذخیره کردیم را حذف میکنیم 
//اطلاعات نیز ار استور پاک میشود
export const POST = async (request: Request) => {
  const cookie = await cookies();
  cookie.delete("Token");
  return Response.json(null, { status: 200 });
};
