import type {MetadataRoute} from "next"; import {siteConfig} from "@/lib/site-config"; import {solutionGuides} from "@/lib/solution-guides";
export default function sitemap():MetadataRoute.Sitemap{
  const pages=[{path:"",priority:1},{path:"/solucoes",priority:.9},{path:"/contato",priority:.6},{path:"/privacidade",priority:.3},{path:"/termos",priority:.3},...solutionGuides.map(({slug})=>({path:`/solucoes/${slug}`,priority:.8}))];
  return pages.map(({path,priority})=>({url:`${siteConfig.siteUrl}${path}`,lastModified:new Date(),changeFrequency:path?"monthly":"weekly",priority}));
}
