import "./globals.css";
import { Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

const menuname = [
  { name: "회원가입", link: "/signup" },
  { name: "로그인", link: "/login" },
  { name: "마이페이지", link: "/profile" },
];
const items = menuname.map((navtitle, index) => ({
  key: String(index + 1),
  label: <Link href={navtitle.link}>{navtitle.name}</Link>,
}));

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Dev hyunj ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </body>
    </html>
  );
}
