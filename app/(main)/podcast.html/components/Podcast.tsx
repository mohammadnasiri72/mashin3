import React from "react";
import BoxPodcasts from "./BoxPodcasts";
import SidebarPodcasts from "./SidebarPodcasts";

function Podcast({ podcasts }: { podcasts: Items[] }) {
  console.log(podcasts);

  return (
    <>
      <div className="flex flex-wrap ">
        <div className="lg:w-3/4 w-full">
          <BoxPodcasts podcasts={podcasts} />
        </div>
        <div className="lg:w-1/4 w-full">
          <SidebarPodcasts podcasts={podcasts} />
        </div>
      </div>
    </>
  );
}

export default Podcast;
