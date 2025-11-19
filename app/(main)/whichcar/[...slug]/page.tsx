import { getItem } from "@/services/Item/Item";
import { getItemId } from "@/services/Item/ItemId";
import React from "react";

async function pageWhichcarsDainamic({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const param = await params;
  const searchParam = await searchParams;
  const id = Number(param.slug[0]);
  const page = Number(searchParam.page);
  const term = String(searchParam.term);
  if (String(id) === "NaN") {
    return <>موجود نیست</>;
  }

  const whichcars: ItemsId = await getItemId(id);

  console.log(whichcars);

  return <div></div>;
}

export default pageWhichcarsDainamic;
