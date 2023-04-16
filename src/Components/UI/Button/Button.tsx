import React, { FC, ReactNode } from "react";

interface IButton {
  children: ReactNode;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
