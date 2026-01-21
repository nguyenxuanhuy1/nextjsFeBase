"use client";
import CustomButton from "@/src/components/CustomButton";
import CustomInput from "@/src/components/CustomInput";
import CustomSelect from "@/src/components/CustomSelect";
import CustomSwitch from "@/src/components/CustomSwitch";
import CustomTable from "@/src/components/CustomTable";
import Loading from "@/src/components/ui/Loading";
import { Form } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
export default function Home() {
  const [paramsPage, setParamPage] = useState({ page: 1, size: 3 });
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const columns: ColumnsType<User> = [
    { title: "ID", dataIndex: "id" },
    { title: "Tên", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
  ];
  useEffect(() => {
    const fakeData = Array.from({ length: paramsPage.size }, (_, i) => ({
      id: (paramsPage.page - 1) * paramsPage.size + i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@gmail.com`,
    }));

    setData(fakeData);
    setTotal(100);
  }, [paramsPage]);

  const [form] = Form.useForm();
  const [enabled, setEnabled] = useState(false);
  const onFinish = (values: any) => {
    console.log(values);
  };
  if (loading) return <Loading />;
  return (
    <div className="">
      <main className="">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <CustomButton
            label="Xem chế độ loading"
            type="primary"
            onClick={() => setLoading(true)}
          />

          <CustomInput
            name="username"
            label="Tên đăng nhập"
            required
            tooltip="Tên hiển thị khi đăng nhập"
            placeholder="Nhập username"
          />
          <CustomSelect
            name="status"
            label="Trạng thái"
            required
            options={[
              { label: "Hoạt động", value: 1 },
              { label: "Tạm khóa", value: 0 },
            ]}
            placeholder="Chọn trạng thái"
          />
          <CustomInput
            name="email"
            label="Email"
            placeholder="example@gmail.com"
          />
          <CustomSwitch
            label="Kích hoạt tính năng"
            checked={enabled}
            onChange={(checked) => setEnabled(checked)}
          />
          <CustomTable
            columns={columns}
            dataSource={data}
            rowKey="id"
            loading={!data.length}
            paramsPage={paramsPage}
            setParamPage={setParamPage}
            total={total}
            setItemTarget={(record) => console.log("Click row:", record)}
          />
          <CustomButton type="primary" htmlType="submit">
            Submit
          </CustomButton>
        </Form>
      </main>
    </div>
  );
}
