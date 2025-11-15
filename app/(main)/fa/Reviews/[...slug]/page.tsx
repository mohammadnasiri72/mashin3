import { getCategory } from "@/services/Category/Category";
import CarBrands from "./componnents/CarBrands";

async function pageReviews({ params }: { params: Promise<{ slug: string }> }) {
  const param = await params;
  const id = Number(param.slug[0]);

  const carBrands: ItemsCategory[] = await getCategory({
    TypeId: 1042,
    LangCode: "fa",
    ParentIdArray: id,
    PageIndex: 1,
    PageSize: 200,
  });

  return <CarBrands carBrands={carBrands}/>;
}

export default pageReviews;
