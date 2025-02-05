import React, { useCallback } from "react";
import SliderItemsType from "./types/SliderItemsType";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  products: SliderItemsType[];
};

const SliderItemsContainer = ({ products }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start", 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((product: SliderItemsType, index: number) => {
            return (
              <div key={index} className="embla__slide">
                <div className="embla__slide__number">{product.number}</div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};

export default SliderItemsContainer;
