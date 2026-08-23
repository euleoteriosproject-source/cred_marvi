export type Acquisition={source?:string;medium?:string;campaign?:string;content?:string;term?:string;landingPage:string;referrer?:string};
const clean=(value:string|null)=>value?.slice(0,100)||undefined;
export function captureAcquisition(search:URLSearchParams,landingPage:string,referrer?:string):Acquisition{return{source:clean(search.get("utm_source")),medium:clean(search.get("utm_medium")),campaign:clean(search.get("utm_campaign")),content:clean(search.get("utm_content")),term:clean(search.get("utm_term")),landingPage:landingPage.slice(0,300),referrer:referrer?.slice(0,300)}}
