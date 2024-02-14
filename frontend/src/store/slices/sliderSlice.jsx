import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
    name: "slider",
    initialState: 0,
    reducers: {
        toggle: state => state = !state
    }
})

export const {toggle} = sliderSlice.actions;
export default sliderSlice.reducer;