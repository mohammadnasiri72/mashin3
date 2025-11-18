import React from "react";
import Podcast from "./components/Podcast";
import { getItem } from "@/services/Item/Item";

async function pagePodcast({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
     const param = await params;
  const searchParam = await searchParams;
  const page = Number(searchParam.page);
  const term = String(searchParam.term);

  const podcasts: Items[] = await getItem({
      TypeId: 1047,
      langCode: "fa",
      PageIndex: page || 1,
      ...(term && term !== "undefined" && { Term: term }),
      PageSize: 10,
    });

  return (
    <>
      <Podcast podcasts={podcasts}/>
    </>
  );
}

export default pagePodcast;
