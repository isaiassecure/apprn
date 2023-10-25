import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../Utils';

let id = 0;

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    image_list: [],
    test:2
  },
  reducers: {
    addImage: (state, action) => {
      state.image_list = [...state.image_list, {id: ++id, image: action.payload.image}];
      
      storeData(state.image_list)

    },
    loadData: (state, action) => {
      state.image_list = action.payload
    },
    deleteImage: (state, action) => {
      console.log({action})
      state.image_list = [...state.image_list.filter(image => image.image != action.payload)];
      storeData(state.image_list)

    },
  },
});

export const { addImage, deleteImage,loadData} = imagesSlice.actions;

export const selectImages = state => state.image_list;

export default imagesSlice.reducer;
