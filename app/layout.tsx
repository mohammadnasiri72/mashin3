import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import fa_IR from "antd/locale/fa_IR";
import type { Metadata } from "next";
import AOSProvider from "./AOSProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ماشین 3 - بازار خودرو ایران",
  description: "اطلاعات کامل خودرو، قیمت، اخبار و مقایسه",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider
            direction="rtl"
            locale={fa_IR}
            theme={{
              token: {
                colorPrimary: "#ce1a2a",
                fontFamily: "var(--font-ravi)",
              },
            }}
          >
            <AOSProvider>{children}</AOSProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
