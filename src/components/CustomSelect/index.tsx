import React from "react";
import { Select, type SelectProps, Tooltip, Form } from "antd";

const { Option } = Select;

export interface OptionType {
  label: string;
  value: any;
}

export interface CustomSelectProps extends SelectProps {
  label?: string;
  name?: string;
  required?: boolean;
  tooltip?: string;
  options?: OptionType[];
  rules?: any[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  required,
  tooltip,
  options = [],
  rules,
  children,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      required={false}
      label={
        label ? (
          <span className="label-custom">
            {label}
            {required && <span style={{ color: "red" }}> *</span>}
            {tooltip && (
              <Tooltip title={tooltip}>
                <span style={{ marginLeft: 6, cursor: "pointer" }}>🛈</span>
              </Tooltip>
            )}
          </span>
        ) : undefined
      }
      rules={
        required
          ? [
              { required: true, message: `${label} là bắt buộc` },
              ...(rules || []),
            ]
          : rules
      }
      style={{ marginBottom: 16 }}
    >
      <Select {...rest} style={{ width: "100%", height: 40, fontSize: 16 }}>
        {children ||
          options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
      </Select>
    </Form.Item>
  );
};

export default CustomSelect;
