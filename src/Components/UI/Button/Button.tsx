import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./Button.style.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
