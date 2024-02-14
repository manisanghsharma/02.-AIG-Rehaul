import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./slices/sliderSlice";
import imagesSlice from "./slices/imagesSlice";

export default configureStore({
    reducer: {
        slider: sliderSlice,
        images: imagesSlice
    }
})