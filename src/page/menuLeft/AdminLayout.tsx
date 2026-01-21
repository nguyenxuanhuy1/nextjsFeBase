"use client";

import { Avatar, Image, Layout, Space } from "antd";
import Sidebar from "./Sidebar";
import { UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsible theme="dark">
        <div
          style={{
            height: 42,
            marginBottom: 16,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <Image
            src="/catchmouse.png"
            alt="Loading..."
            width={200}
            height={100}
          />
        </div>
        <Sidebar />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 16px",
            height: 64,
            lineHeight: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#001529",
          }}
        >
          <div style={{ display: "flex" }}>
            <Image src="/cave.png" alt="Loading..." width={150} height={67} />

            <div style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
              Thu nhỏ menu để cứu bé chuột nào.!
            </div>
          </div>

          <Space>
            <span style={{ color: "#fff" }}>Quang hát lờ</span>

            <Avatar
              size="large"
              src="/avatar.png"
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </Space>
        </Header>

        <Content
          style={{
            margin: 16,
            overflowY: "auto",
            height: "calc(100vh - 64px)",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: "#fff",
              borderRadius: 8,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
