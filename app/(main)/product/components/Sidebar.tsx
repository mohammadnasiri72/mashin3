import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const shahinModels = [
    {
      image: '/images/gallery/shahin-s.jpg',
      title: 'شاهین S',
      link: '#'
    },
    {
      image: '/images/gallery/shahin-g.jpg',
      title: 'شاهین G',
      link: '#'
    },
    {
      image: '/images/gallery/shahin-automatic-cv.jpg',
      title: 'شاهین اتوماتیک CVT',
      link: '#'
    },
    {
      image: '/images/gallery/shahin-plus.jpg',
      title: 'شاهین پلاس',
      link: '#'
    }
  ];

  return (
    <div className="sidebar space-y-6">
      {/* مدل‌های شاهین */}
      <div className="sidebar_widget bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="widget_title text-lg font-bold text-gray-900 mb-3">
          <Link href="#" className="hover:text-red-600 transition-colors">
            مدل های شاهین
          </Link>
        </h3>

        <div className="space-y-4">
          {shahinModels.map((model, index) => (
            <div key={index} className="item_wd relative rounded-lg overflow-hidden group">
              <Link href={model.link}>
                <Image
                  src={model.image}
                  alt={model.title}
                  width={300}
                  height={150}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
                  <h4 className="text-sm font-bold">
                    <Link href={model.link}>{model.title}</Link>
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ماشین‌های رقبا */}
      <div className="sidebar_widget bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="widget_title text-lg font-bold text-gray-900 mb-3">
          <Link href="#" className="hover:text-red-600 transition-colors">
            ماشین های رقبا
          </Link>
        </h3>

        <div className="space-y-4">
          {shahinModels.map((model, index) => (
            <div key={index} className="item_wd relative rounded-lg overflow-hidden group">
              <Link href={model.link}>
                <Image
                  src={model.image}
                  alt={model.title}
                  width={300}
                  height={150}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
                  <h4 className="text-sm font-bold">
                    <Link href={model.link}>{model.title}</Link>
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;