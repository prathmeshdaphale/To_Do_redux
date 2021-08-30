import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

const counterSlice = createSlice({
  name: "First",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    del: (state, action) => {
      var arr = state.value.filter((item, index) => {
        return index !== action.payload.in;
      });
      state.value = arr;
    }
  }
});

export const { add, del } = counterSlice.actions;

export default counterSlice.reducer;
