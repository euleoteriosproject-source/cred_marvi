import {ReactNode} from "react";
type ContainerWidth="default"|"wide"|"reading";
const widths:Record<ContainerWidth,string>={default:"max-w-7xl",wide:"max-w-[90rem]",reading:"max-w-3xl"};
export function Container({children,className="",width="default"}:{children:ReactNode;className?:string;width?:ContainerWidth}){return <div className={`mx-auto box-border w-full px-5 sm:px-8 ${widths[width]} ${className}`}>{children}</div>}
