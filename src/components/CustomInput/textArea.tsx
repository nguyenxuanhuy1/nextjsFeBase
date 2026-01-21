import React from "react";
import { Form, Input, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import type { TextAreaProps } from "antd/es/input";

interface CustomTextAreaProps extends TextAreaProps {
  label?: string;
  required?: boolean;
  tooltip?: string;
  name: string;
}

const { TextArea } = Input;

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  required,
  tooltip,
  name,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      required={false}
      label={
        <span className="textArea-custom">
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
      <TextArea rows={4} {...rest} />
    </Form.Item>
  );
};

export default CustomTextArea;
