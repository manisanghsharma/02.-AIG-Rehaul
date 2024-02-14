import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/slices/sliderSlice";
import { useEffect } from "react";

const Images = () => {
  const dispatch = useDispatch();
  let slides = [];
  const handleImagesClick = () => {
    dispatch(toggle());
  }
// useEffect(() => {
  slides = useSelector((state) => state.images);
// }, dispatch)q
  

  return (
    <>
    <div className="flex justify-center">
      <ul className="p-5 grid grid-cols-4 gap-3 w-fit max-md:grid-cols-2 max-md:grid-rows-2">
        {slides.map((x) => (
          <li key={x} onClick={handleImagesClick}>
            <img src={x} 
            className="w-[200px] rounded-lg cursor-pointer max-lg:w-[170px]" />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
export default Images