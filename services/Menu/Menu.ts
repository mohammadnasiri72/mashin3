import axiosInstance from "../axiosInstance";

interface MenuParams {
  langCode?: string;
  menuKey?: string;
}

// تایپ آیتم‌های داخل menuItems
interface MenuItem {
  id: number;
  menuId: number;
  menuKey: string;
  menuTitle: string;
  langCode: string;
  parentId: number | null;
  itemId: number;
  title: string;
  image: string;
  imageTitle: string | null;
  type: string;
  typeName: string;
  href: string;
  pageUrl: string | null;
  priority: number;
  target: "_self" | "_blank";
  url: string;
}

// تایپ گروه‌های منو - فقط 4 فیلد دارد
interface MenuGroup {
  id: number;
  menuKey: string;
  title: string;
  menuItems: MenuItem[]; // آرایه‌ای از MenuItem
}

// تایپ پاسخ سرور - آرایه‌ای از MenuGroup
type MenuResponse = MenuGroup[];

export const getMenu = async (data: MenuParams): Promise<MenuResponse> => {
  try {
    const response = await axiosInstance.get<MenuResponse>("/api/Menu", {
      params: data,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت منو:", error);
    throw error;
  }
};

// Export types
export type { MenuItem, MenuGroup, MenuResponse };