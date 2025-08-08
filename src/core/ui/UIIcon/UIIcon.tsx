import React from "react";
import { UIIcons } from "./UIIcon.enum";
import type { IUIIconProps } from "./UIIcon.type";

const UIIcon: React.FC<IUIIconProps> = (props) => {
  const { name, width = 18, height = 18, onClick } = props;
  const IconComponent = UIIcons[props.name];
  return React.createElement(IconComponent, {
    name: name,
    onClick,
    width: width,
    height: height,
    style: { color: props.color },
    className: props.className,
  });
};

export { UIIcon };
