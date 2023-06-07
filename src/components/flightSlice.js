import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    country: "",
    fromCities: "",
    cityList: [],
    toCities: "",
    token: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    setCountry: (state, value) => {
      state.country = value;
    },
    setFromCities: (state, value) => {
      state.fromCities = value;
    },
    setCityList: (state, value) => {
      state.cityList = value;
    },
    setToCities: (state, value) => {
      state.toCities = value;
    },
    setToken: (state, value) => {
      state.token = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setCountry,
  setFromCities,
  setCityList,
  setToCities,
  setToken,
} = counterSlice.actions;

export default counterSlice.reducer;
