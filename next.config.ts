import type {NextConfig} from "next";

const nextConfig:NextConfig={
  allowedDevOrigins:["192.168.2.105"],
  async headers(){return[{source:"/:path*",headers:[
    {key:"X-Content-Type-Options",value:"nosniff"},
    {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
    {key:"X-Frame-Options",value:"SAMEORIGIN"},
    {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},
  ]}]},
};

export default nextConfig;
