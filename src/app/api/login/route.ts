import * as jose from "jose";
//این بخش برای دریافت اطلاعات و تولید توکن و استور کردن ان است
import { cookies } from "next/headers";
export const POST = async () => {
  const databasePassword: string | undefined = process.env.PASSWORD;
  let secret: Uint8Array<ArrayBufferLike> | string | undefined =
    process.env.SECRET;
  let newSecret = jose.base64url.decode(secret ? secret : "");
  const fetching = await (await fetch("https://randomuser.me/api")).json()
  const name = fetching.results[0].name.first;
  const token = await new jose.SignJWT({ name })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(newSecret);
  const cookie = await cookies();
  cookie.set("Token", token);
  return new Response(JSON.stringify(fetching), { status: 200});
};