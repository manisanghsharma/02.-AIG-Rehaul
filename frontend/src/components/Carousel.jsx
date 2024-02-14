import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "react-feather";
import { useSelector} from "react-redux";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const sliderRef = useRef();
  // const slides = useSelector(state => state.images)
  const slides = [
		"https://th-i.thgim.com/public/incoming/9uvnty/article67222424.ece/alternates/BASE_SQUARE/2023-08-04T094328Z_1224629970_RC2WG2AC6YU7_RTRMADP_3_WPP-RESULTS-TWITTER.JPG",
		"https://i.imgur.com/dKJE7nO.jpg",
		"https://i.imgur.com/ADoDy9y.jpg",
		"https://i.imgur.com/z8tTBsH.jpg",
	];


  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div ref={sliderRef} className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img className="rounded-lg" src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-[crimson]/80 text-gray-800 hover:bg-[crimson] flex justify-center items-center"
        >
          <ChevronLeft size={35} className="relative right-[2px]" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-[crimson]/80 text-gray-800 hover:bg-[crimson]"
        >
          <ChevronRight size={35} className="relative left-[2px]" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
      <button className="absolute top-3 right-3">
        <X onClick={handleSliderCross} size={35} color="black"/>
      </button>
    </div>
  );
}

