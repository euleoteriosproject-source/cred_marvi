import type { Config } from "tailwindcss";
export default {content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],theme:{extend:{colors:{navy:"#0B1320",navy2:"#182638",gold:"#D4AF37",cream:"#F8F7F3",muted:"#566171"},fontFamily:{sans:["var(--font-manrope)"],serif:["var(--font-playfair)"]},boxShadow:{premium:"0 24px 80px rgba(11,19,32,.12)"}}},plugins:[]} satisfies Config;
