import { getMenu, type MenuResponse } from "@/services/Menu/Menu";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "ماشین 3 - بانک اطلاعات خودرو ، بررسی خودرو ، سایت تخصصی خودرو ماشین",
  description: "بانک اطلاعات خودرو ، بررسی خودرو ، سایت تخصصی خودرو ماشین",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu: MenuResponse = await getMenu({ langCode: "fa", menuKey: "" });

  return (
    <>
      <Header menu={menu} />
      <main>{children}</main>
      <Footer menu={menu}/>
    </>
  );
}
