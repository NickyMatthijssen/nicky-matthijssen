"use client";

import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StrapiImage from "./StrapiImage";

type SliderType = {
  component: {
    id: number;
    images: {
      data: Array<any>;
    };
  };
};

export default function Slider(props: SliderType): ReactElement {
  const {
    component: {
      images: { data },
    },
  } = props;

  return (
    <Swiper slidesPerView={6} spaceBetween={48} centeredSlides loop autoplay>
      {data.map((image) => (
        <SwiperSlide key={image.id}>
          <StrapiImage
            image={image}
            fill
            className="!h-12 w-auto !relative object-contain !left-0 !w-[auto] m-auto"
            sizes="16w"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
