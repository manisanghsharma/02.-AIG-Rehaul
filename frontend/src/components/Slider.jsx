import Carousel from "./Carousel"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Slider = () => {

  const slides = [
		"https://th-i.thgim.com/public/incoming/9uvnty/article67222424.ece/alternates/BASE_SQUARE/2023-08-04T094328Z_1224629970_RC2WG2AC6YU7_RTRMADP_3_WPP-RESULTS-TWITTER.JPG",
		"https://i.imgur.com/dKJE7nO.jpg",
		"https://i.imgur.com/ADoDy9y.jpg",
		"https://i.imgur.com/z8tTBsH.jpg",
	];

  // const slides = useSelector(state => state.images);

  
  return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="p-4 max-w-[500px] min-w-[300px] ">
          <Carousel slides={slides}/>
        </div>
      </div>
  )
}
export default Slider