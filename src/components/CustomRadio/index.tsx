import React from "react";
import { Radio, type RadioGroupProps, Tooltip } from "antd";

export interface OptionType {
  label: string;
  value: string | number;
}

interface CustomRadioProps extends RadioGroupProps {
  label?: string;
  required?: boolean;
  tooltip?: string;
  options?: OptionType[];
}

const CustomRadio: React.FC<CustomRadioProps> = ({
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
      <Radio.Group {...rest}>
        {children ||
          options.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>
          ))}
      </Radio.Group>
    </div>
  );
};

export default CustomRadio;
