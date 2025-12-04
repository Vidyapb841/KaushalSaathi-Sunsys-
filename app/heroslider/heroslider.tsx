"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/logos/slide1.png", "/logos/slide2.png", "/logos/slide3.png", "/logos/slide4.png", "/logos/slide5.png"];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(auto);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full h-[410px] overflow-hidden">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-[410px] relative">
            <Image
              src={src}
              alt={`slide-${i}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-[#074799]" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
