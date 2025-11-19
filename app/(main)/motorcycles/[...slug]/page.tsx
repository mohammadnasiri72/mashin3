import React from "react";

async function pageMotorcyclesDainamic({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const param = await params;
  const searchParam = await searchParams;
  const id = Number(searchParam.id);
  return <div></div>;
}

export default pageMotorcyclesDainamic;
