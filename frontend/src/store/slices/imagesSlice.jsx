import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({  
    name: "images",
    initialState: [],
    reducers: {
        updateImages: (state, action) => {
            state = action.payload;
            console.log(state);
        }
    }
})

export const {updateImages} = imagesSlice.actions;
export default imagesSlice.reducer;