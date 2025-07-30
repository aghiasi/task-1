import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
//jose برای توکن و ریدایرک ها کاربر در صورت ورود
import * as jose from "jose";
export default async (request: NextRequest) => {
    // کوکی کاربر را دریافت کرده
  const cookie = await cookies();
  const token = cookie.get("Token");
    // سکرت را از فایل ای ان وی میخوانیم
  let secret: string | undefined | Uint8Array<ArrayBufferLike> =
    process.env.SECRET;
    // این بخش برای جلو گیری از ارور در صورت وجود یا نقص در فایل ای ان وی میباشد
  const newSecret = jose.base64url.decode(secret ? secret : "");
  //اگر توکن در کوکی وجود داشت 
  if (token) {
    try {
        // و توکن ولید بود 
      const validation = await jose.jwtVerify(token.value, newSecret);
      if (request.url.includes("dashbord") && validation) {
        // و ادرس داشبورد بود که ادامه 
        return NextResponse.next();
      }
        // اگر ولید بود کابر را از مسیر اث به داشبورد هدایت کن
      if (request.url.includes("/auth") && validation) {
        return NextResponse.redirect(new URL("/dashbord", request.url));
      }
    } catch (e) {
        // اگر توکن ولید نبود و ترای کامل اجرا نشد 
      if (request.url.includes("dashbord")) {
        // از مسیر داشبود به اث
        return NextResponse.redirect(new URL("/auth", request.url));
      }
      // از مسیر اث ادامه 
      if (request.url.includes("/auth")) {
        return NextResponse.next();
      }
    }
  } else {
    // اگر توکن وکوکی نبود 
    if (request.url.includes("dashbord")) {
        // از داشبودر به اث
      return NextResponse.redirect(new URL("/auth", request.url));
    }
    if (request.url.includes("/auth")) {
        // از مسیر اث ادامه
      return NextResponse.next();
    }
  }
};
// کانفیگ برای مسیر های داشبورد و هر چه بعد ان وجود دارد و مسیر اث اجرا شود یعنی این نرم افزار میانی فقط 
//در این مسیر ها اجرا میشود
export const config = {
  matcher: ["/dashbord/:path*", "/auth"],
};
