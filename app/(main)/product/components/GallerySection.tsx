"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Modal, Row, Col } from 'antd';

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    '/images/gallery/auto-11.jpg',
    '/images/gallery/auto-12.jpg',
    '/images/gallery/auto-11.jpg',
    '/images/gallery/auto-12.jpg',
    '/images/gallery/auto-11.jpg',
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="detailsBox bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="dt_title text-xl font-bold text-gray-900 mb-4">
        <strong className="text-red-600">تصاویر </strong>
        ماشین شاهین اتوماتیک
      </h3>

      <div className="space-y-4">
        {/* ردیف‌های تصاویر */}
        {[0, 1, 2, 3].map((rowIndex) => (
          <Row key={rowIndex} gutter={[8, 8]} className="mb-2">
            {images.map((image, colIndex) => (
              <Col key={colIndex} xs={12} sm={8} md={6} lg={4}>
                <div 
                  className="inn_gl_item border-2 border-transparent rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-red-400"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
                    alt={`شاهین اتوماتیک ${rowIndex * 5 + colIndex + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover"
                  />
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </div>

      {/* Modal برای نمایش تصویر بزرگ */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width="80%"
        style={{ maxWidth: '800px' }}
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="تصویر بزرگ"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        )}
      </Modal>

      <style jsx global>{`
        .inn_gl_item {
          position: relative;
          overflow: hidden;
        }

        .inn_gl_item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(206, 26, 42, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .inn_gl_item:hover::before {
          opacity: 1;
        }

        .ant-modal-body {
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default GallerySection;