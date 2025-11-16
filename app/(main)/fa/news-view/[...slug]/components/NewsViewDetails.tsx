"use client";

import CommentsSectionNews from "./CommentsSectionNews";
import NewsContentSection from "./NewsContentSection";
import NewsGallerySection from "./NewsGallerySection";
import NewsHeroSection from "./NewsHeroSection";
import NewsRelatedSection from "./NewsRelatedSection";
import SidebarNewsView from "./SidebarNewsView";

function NewsViewDetails({
  detailsNews,
  popularNews,
  Attachment,
}: {
  detailsNews: ItemsId;
  popularNews: Items[];
  Attachment: ItemsAttachment[];
}) {
 

  return (
    <>
    
      {/* <NewsHeroSection detailsNews={detailsNews} /> */}
      <div className="flex flex-wrap bg-gray-50">
        <div className="lg:w-3/4 w-full">
          <NewsContentSection detailsNews={detailsNews} />
          <NewsGallerySection
            Attachment={Attachment}
            detailsNews={detailsNews}
          />

          <NewsRelatedSection relatedNews={popularNews}/>
        </div>
        <div className="lg:w-1/4 w-full">
          <SidebarNewsView popularNews={popularNews} />
        </div>
        <CommentsSectionNews detailsNews={detailsNews}/>
      </div>
    </>
  );
}

export default NewsViewDetails;
