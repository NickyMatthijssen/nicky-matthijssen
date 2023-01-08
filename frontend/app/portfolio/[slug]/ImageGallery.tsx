"use client";

import { ReactElement, useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StrapiImage from "../../../components/StrapiImage";
import { IImage } from "../../../lib/interfaces/strapi";

export declare type ImageGalleryProps = {
  gallery: Array<IImage>;
};

export default function ImageGallery(
  props: ImageGalleryProps
): ReactElement | null {
  const { gallery } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const hasImages = useMemo(() => !!gallery && gallery.length > 0, [gallery]);

  const selectedImage = useMemo(
    () => (hasImages ? gallery[selectedIndex] : undefined),
    [gallery, selectedIndex]
  );

  useEffect(() => {
    let timeout = setTimeout(() => setIsEnabled(true), 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <StrapiImage
        image={selectedImage}
        width={300}
        height={300}
        className="h-[300px] w-full object-cover rounded-lg"
      />

      {hasImages && (
        <div className="-mt-16 mx-12">
          <Swiper slidesPerView={3} spaceBetween={24}>
            {isEnabled &&
              gallery.map((image: IImage, index: number) => (
                <SwiperSlide key={image.id}>
                  <div
                    className={`aspect-square rounded-lg object-contain border-4 bg-white overflow-hidden ${
                      selectedIndex === index
                        ? "border-rose-600"
                        : "border-rose-300"
                    }`}
                  >
                    <StrapiImage
                      image={image}
                      width={200}
                      height={200}
                      quality={50}
                      className="h-full w-full object-cover"
                      role="button"
                      onClick={() => setSelectedIndex(index)}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
