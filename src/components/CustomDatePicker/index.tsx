import React from "react";
import { DatePicker, type DatePickerProps, Tooltip, Form } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface CustomDatePickerProps extends DatePickerProps {
  name: string; // bắt buộc phải có để Form quản lý
  label?: string;
  required?: boolean; // chỉ hiển thị dấu * thôi, không liên quan rules
  tooltip?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  name,
  label,
  required,
  tooltip,
  minDate,
  maxDate,
  ...rest
}) => {
  const disabledDate = (current: Dayjs) => {
    if (!current) return false;
    const afterMin = minDate ? current.isBefore(minDate, "day") : false;
    const beforeMax = maxDate ? current.isAfter(maxDate, "day") : false;
    return afterMin || beforeMax;
  };

  return (
    <Form.Item
      name={name}
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
      getValueFromEvent={(date) =>
        date ? date.format("YYYY-MM-DD") : undefined
      }
      getValueProps={(value) => ({
        value: value ? dayjs(value, "YYYY-MM-DD") : undefined,
      })}
    >
      <DatePicker
        style={{ width: "100%", height: 40, fontSize: 16 }}
        disabledDate={disabledDate}
        format="YYYY-MM-DD"
        {...rest}
      />
    </Form.Item>
  );
};

export default CustomDatePicker;
