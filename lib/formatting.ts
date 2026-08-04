export const digits = (value:string) => value.replace(/\D/g, "");
export function maskPhone(value:string){ const d=digits(value).slice(0,11); return d.length<=10?d.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/,(_,a,b,c)=>`${a?`(${a}${a.length===2?") ":""}`:""}${b}${c?`-${c}`:""}`):d.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,"($1) $2-$3"); }
export const normalizePhone = (value:string) => digits(value);
export function maskCnpj(value:string){return digits(value).slice(0,14).replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2")}
export function validCnpj(value?:string){if(!value)return true;const n=digits(value);if(n.length!==14||/^(\d)\1+$/.test(n))return false;const calc=(base:string,f:number)=>{let sum=0;for(const x of base){sum+=Number(x)*f;f--;if(f===1)f=9}return (sum%11<2?0:11-sum%11)};return calc(n.slice(0,12),5)===+n[12]&&calc(n.slice(0,13),6)===+n[13]}
