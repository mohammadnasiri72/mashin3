import { NextResponse } from "next/server";
import { getItemId } from "./services/Item/ItemId";
import { getItemByUrl } from "./services/Item/ItemByUrl";
import { getCategoryByUrl } from "./services/Category/CategoryByUrl";

export async function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname, searchParams } = url;

  // بررسی ریدایرکت محصولات
  if (pathname.startsWith("/car/")) {
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.next();
    }

    try {
      const detailsCar: ItemsId = await getItemId(Number(id));

      if (detailsCar?.url) {
        // ساخت URL کامل فعلی
        const currentFullUrl = decodeURIComponent(pathname + url.search);

        // decode کردن URL دریافتی از API
        const decodedDetailsUrl = decodeURIComponent(detailsCar.url);

        // مقایسه URLها بعد از decode
        if (decodedDetailsUrl !== currentFullUrl) {
          return NextResponse.redirect(
            new URL(decodedDetailsUrl.toLowerCase(), request.url),
            { status: 301 }
          );
        }
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  } else if (pathname.startsWith("/fa/")) {
    if (pathname !== pathname.toLowerCase()) {
      return NextResponse.redirect(
        new URL(pathname.toLowerCase(), request.url),
        { status: 301 }
      );
    }
  } else if (pathname.startsWith("/cars/")) {
    const id = Number(searchParams.get("id"));

    const decodedPathname = decodeURIComponent(pathname);
    try {
      const data: ItemsCategoryId = await getCategoryByUrl(decodedPathname);
      if (data.id > 0 && id !== data?.id) {
        return NextResponse.redirect(
          new URL((pathname+`?id=${data?.id}`).toLowerCase(), request.url),
          { status: 301 }
        );
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  } else {
    const decodedPathname = decodeURIComponent(pathname);
    try {
      const data: ItemsId = await getItemByUrl(decodedPathname);
      if (data.url !== decodedPathname) {
        return NextResponse.redirect(
          new URL(data.url.toLowerCase(), request.url),
          { status: 301 }
        );
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  }

  return NextResponse.next();
}
