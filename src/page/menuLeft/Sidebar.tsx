"use client";

import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";

const items = [
  {
    key: "/admin",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/admin/users",
    icon: <UserOutlined />,
    label: "Người dùng",
  },
  {
    key: "/admin/products",
    icon: <AppstoreOutlined />,
    label: "Sản phẩm",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[pathname]}
      items={items}
      //   onClick={({ key }) => router.push(key)}
    />
  );
}
