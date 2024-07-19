import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: { experience: [] },
    reloadData: false,
  },
  reducers: {
    ShowLoading: (state) => {
      state.loading = true;
    },
    HideLoading: (state) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
  },
});

export const { ShowLoading, HideLoading, setPortfolioData, ReloadData } =
  rootSlice.actions;

export default rootSlice.reducer;
