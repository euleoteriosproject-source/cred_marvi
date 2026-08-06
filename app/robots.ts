import type {MetadataRoute} from "next"; import {siteConfig} from "@/lib/site-config";
export default function robots():MetadataRoute.Robots{
  if(!siteConfig.isProduction)return{rules:{userAgent:"*",disallow:"/"}};
  return{rules:{userAgent:"*",allow:"/",disallow:["/analise","/sucesso","/api/"]},sitemap:`${siteConfig.siteUrl}/sitemap.xml`,host:siteConfig.siteUrl};
}
