export type NavigationItem={label:string;href:string;section:string};
export const primaryNavigation:NavigationItem[]=[
 {label:"Soluções",href:"/#objetivos",section:"objetivos"},
 {label:"Para você",href:"/analise?profile=PERSON",section:""},
 {label:"Para empresas",href:"/analise?profile=BUSINESS",section:""},
 {label:"Como funciona",href:"/#como-funciona",section:"como-funciona"},
 {label:"Especialista",href:"/#especialista",section:"especialista"},
 {label:"Segurança",href:"/#seguranca",section:"seguranca"},
];
export const observedSectionIds=primaryNavigation.map(item=>item.section).filter(Boolean);
