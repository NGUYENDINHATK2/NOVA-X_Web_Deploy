import type { SVGProps } from "react";
import type { UIIcons } from "./UIIcon.enum";

export interface IUIIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof UIIcons;
  color?: string;
  size?: number;
  className?: React.ComponentProps<"div">["className"];
}
