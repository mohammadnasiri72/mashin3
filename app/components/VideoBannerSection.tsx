import Link from "next/link";

const VideoBannerSection = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full p-1.5">
          <div className="w-full relative overflow-hidden rounded-2xl shadow-lg md:h-80 h-auto cursor-pointer">
            <div className="relative h-full w-full">
              <img
                src="/images/gallery/video11.jpg"
                alt="مقایسه تخصصی خودرو"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0">
              {/* <div className="!text-white inline-block relative pl-2.5 text-[22px] z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ce1a2a]">
                <h3 className="text-3xl font-bold !text-white">
                  مقایسه تخصصی خودرو
                </h3>
              </div> */}
              <div className="titleBox pink_Highlight pr-3">
          <h3 className="!text-white !font-bold inline-block relative text-3xl z-10 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1/2 after:-z-10 after:bg-[#ce1a2a]">
              مقایسه تخصصی خودرو
          </h3>
        </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-1.5 flex flex-wrap">
          <div className="sm:w-1/2 w-full px-2.5">
            <div className="w-full overflow-hidden rounded-2xl shadow-lg sm:h-80 h-auto cursor-pointer">
              <Link className="h-full w-full" href="#">
                <div className="relative h-full w-full">
                  <img
                    src="/images/gallery/bn-1.jpg"
                    alt="بنر اول"
                    className="object-cover h-full w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:w-1/2 w-full px-2.5 sm:mt-0 mt-3">
            <div className="w-full overflow-hidden rounded-2xl shadow-lg sm:h-80 h-auto cursor-pointer">
              <Link href="#" className="h-full w-full">
                <div className="relative h-full w-full">
                  <img
                    src="/images/gallery/bn-2.jpg"
                    alt="بنر دوم"
                    className="object-cover h-full w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerSection;
