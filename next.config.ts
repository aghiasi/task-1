import type { NextConfig } from "next";
//در کانفیگ نکست روت دیفالت را تغییر میدهیم
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // به زبان ساده هوم پیج را به اث تغییر دادم 
        source:"/",
        destination:"/auth",
        permanent:true,
      }
    ]
  },
};

export default nextConfig;
