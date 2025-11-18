import { getItemId } from "@/services/Item/ItemId";
import MainBoxAutoService from "./components/MainBoxAutoService";
import SidebarAutoService from "./components/SidebarAutoService";

async function pageAutoservicesDetails({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const param = await params;
  const searchParam = await searchParams;
  const id = Number(param.slug[0]);

  const detailsAuto: ItemsId = await getItemId(id);

  return (
    <>
      <div className="flex flex-wrap bg-gray-50">
        <MainBoxAutoService detailsAuto={detailsAuto} />
      </div>
    </>
  );
}

export default pageAutoservicesDetails;
