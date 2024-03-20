"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

const ProductSlideshow = ({ images, title }: Props) => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      modules={[FreeMode, Navigation]}
      className=""
    >
      {images.map((img) => (
        <SwiperSlide key={img}>
          <Image
            src={`/products/${img}`}
            width={1024}
            height={800}
            alt={title}
            className="rounded-lg object-fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlideshow;
