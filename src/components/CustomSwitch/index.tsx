import React from "react";
import { Switch } from "antd";

interface CustomSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        margin: "1rem 0",
      }}
    >
      <span>{label}</span>
      <Switch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{
          backgroundColor: checked ? "#52c41a" : undefined,
        }}
      />
    </div>
  );
};

export default CustomSwitch;
