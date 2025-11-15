import { NextResponse } from "next/server";
import { getItemId } from "./services/Item/ItemId";

export async function middleware(request: Request) {
  const url = new URL(request.url);
  const { pathname, searchParams } = url;

  // بررسی ریدایرکت محصولات
  if (pathname.startsWith("/car/")) {
    const id = searchParams.get('id');
    
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
          return NextResponse.redirect(new URL(decodedDetailsUrl, request.url), { status: 301 });
        }
      }
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
  }

  return NextResponse.next();
}