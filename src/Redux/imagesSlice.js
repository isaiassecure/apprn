import { createSlice } from '@reduxjs/toolkit';

let id = 0;

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    image_list: [{
      id:12223,
      image:'something'
    }],
    test:2
  },
  reducers: {
    addImage: (state, action) => {
      state.image_list = [...state.image_list, {id: ++id, image: action.payload.image}];
    },
    deleteImage: (state, action) => {
      state.image_list = [...state.image_list.filter(image => image.id != action.payload)];
    },
  },
});

export const { addImage, deleteImage } = imagesSlice.actions;

export const selectImages = state => state.image_list;

export default imagesSlice.reducer;
