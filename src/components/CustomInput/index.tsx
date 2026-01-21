import React from "react";
import { Input, Form, Tooltip, type InputProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

interface CustomInputProps extends InputProps {
  label?: string;
  required?: boolean;
  tooltip?: string;
  name: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  required,
  tooltip,
  name,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      style={{ marginBottom: 0 }}
      required={false}
      label={
        <span className="label-custom">
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
          {tooltip && (
            <Tooltip title={tooltip}>
              <span style={{ marginLeft: 6, cursor: "pointer" }}>
                <InfoCircleOutlined />
              </span>
            </Tooltip>
          )}
        </span>
      }
      rules={
        required ? [{ required: true, message: `${label} là bắt buộc` }] : []
      }
    >
      <Input style={{ height: 40, fontSize: 16 }} {...rest} />
    </Form.Item>
  );
};

export default CustomInput;
