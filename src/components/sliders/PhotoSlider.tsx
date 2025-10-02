import React, { useState, useEffect } from "react";

type Slide = {
  id: number;
  image: string;
};

const slides: Slide[] = [
  { id: 1, image: "https://statics.basalam.com/public-129/photo/explore/aN/09-16/CVM9WxcjrDs81bxzK6gd6SHZiL4eqKIMoT3XcIlNkxyqViZ83o.webp" },
  { id: 2, image: "https://statics.basalam.com/public-126/photo/explore/aN/09-09/Yb7Kvd10U2wKKskKzB80R3SH3PdCbnc9V3rTGjJpOh85Y4uEQc.webp" },
  { id: 3, image: "https://statics.basalam.com/public-128/photo/explore/aN/09-14/Yhr5qwHKbWXYlfqwVlgz1VBD3XHYmgj4unVBxzgAh87DbxTsHK.webp" },
  { id: 4, image: "https://statics.basalam.com/public-129/photo/explore/aN/09-16/yF8r2gcJ9d96hFnB6hwo7baNd5PfPMVAHBud5fnZrarxgDtNS5.webp" },
];

const PhotoSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // تغییر خودکار هر ۵ ثانیه
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      {/* کانتینر اسلایدها */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[320px]">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-fit"
            />
          </div>
        ))}
      </div>

      {/* فلش قبلی */}
      <button
        onClick={prevSlide}
        className="absolute w-10 left-10 bottom-1 -translate-y-1/2 bg-white text-orange-600 outline outline-orange-600 outline-2 outline-offset-2 p-2 pr-3 rounded-full shadow trasnsition ease-in-out duration-500  hover:bg-orange-600 hover:text-white"
      >
        ◀
      </button>

      {/* فلش بعدی */}
      <button
        onClick={nextSlide}
        className="absolute w-10 left-24 bottom-1 -translate-y-1/2 bg-white outline text-orange-600 outline-orange-600 outline-2 outline-offset-2 p-2 pl-3 rounded-full shadow trasnsition ease-in-out duration-500  hover:bg-orange-600 hover:text-white"
      >
        ▶
      </button>

      {/* نقاط ناوبری */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full ${
              current === index ? "bg-orange-500 w-6" : "bg-gray-300 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
