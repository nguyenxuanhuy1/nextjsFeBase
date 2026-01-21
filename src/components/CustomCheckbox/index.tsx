import React from "react";
import { Checkbox, Tooltip } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
export interface OptionType {
  label: string;
  value: string | number;
}

interface CustomCheckboxProps extends CheckboxGroupProps {
  label?: string;
  required?: boolean;
  tooltip?: string;
  options?: OptionType[];
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  required,
  tooltip,
  options = [],
  children,
  ...rest
}) => {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label className="label-custom">
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
          {tooltip && (
            <Tooltip title={tooltip}>
              <span style={{ marginLeft: 6, cursor: "pointer" }}>🛈</span>
            </Tooltip>
          )}
        </label>
      )}
      <Checkbox.Group {...rest}>
        {children ||
          options.map((opt) => (
            <Checkbox key={opt.value} value={opt.value}>
              {opt.label}
            </Checkbox>
          ))}
      </Checkbox.Group>
    </div>
  );
};

export default CustomCheckbox;
