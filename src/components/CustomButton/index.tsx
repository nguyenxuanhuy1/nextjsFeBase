import React from "react";
import { Button, type ButtonProps } from "antd";

interface CustomButtonProps extends ButtonProps {
  iconPalace?: "left" | "right";
  label?: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  iconPalace = "left",
  label,
  children,
  className,
  ...rest
}) => {
  return (
    <Button {...rest} className={className || "custom_button"}>
      {iconPalace === "left" && icon}
      {label || children}
      {iconPalace === "right" && icon}
    </Button>
  );
};

export default CustomButton;
