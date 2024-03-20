"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

const ProductMobileSlideshow = ({ images, title }: Props) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="w-screen h-[500]" 
    >
      {images.map((img) => (
        <SwiperSlide key={img}>
          <Image
            src={`/products/${img}`}
            width={600}
            height={500}
            alt={title}
            className="object-fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductMobileSlideshow;
