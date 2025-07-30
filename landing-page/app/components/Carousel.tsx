"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "feature-1.jpg",
  "feature-2.jpg",
  "feature-3.jpg",
  "feature-4.jpg",
  "feature-5.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-[430px] -mt-8 mx-auto" id="default-carousel">
      {/* Carousel wrapper */}
      <div className="relative h-[320px] overflow-hidden rounded-lg flex items-center justify-center">
        {images.map((src, idx) => (
          <div
            key={src}
            className={`absolute left-0 top-0 w-full h-full transition-opacity duration-700 ease-in-out ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex items-center justify-center`}
            style={{ pointerEvents: current === idx ? 'auto' : 'none' }}
            data-carousel-item={current === idx ? 'active' : undefined}
          >
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={`/` + src}
                alt={`Feature ${idx + 1}`}
                width={400}
                height={230}
                className="object-contain max-w-[90%] max-h-[90%] rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-red-950' : 'bg-white/80'}`}
            aria-current={current === idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 -left-5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prev}
        aria-label="Previous"
      >
        <span className="inline-flex items-center justify-center w-10 h-10">
          <Image
            src="/arrow.png"
            alt="Previous"
            width={30}
            height={30}
            loading="lazy"
          />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 -right-5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={next}
        aria-label="Next"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rotate-180">
          <Image
            src="/arrow.png"
            alt="Next"
            width={30}
            height={30}
            loading="lazy"
          />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
