import { siteConfig } from "./site-config";
export function whatsappUrl(message:string){const number=siteConfig.whatsappNumber.replace(/\D/g,"");return number?`https://wa.me/${number}?text=${encodeURIComponent(message)}`:"/contato"}
export function successMessage(protocol:string, firstName:string, need:string){return `Olá! Acabei de enviar uma solicitação pelo site da Marvi Finance.\n\nProtocolo: ${protocol}\nNome: ${firstName}\nNecessidade: ${need}`}
