import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { fetchUserData } from "./fetchUserData";
import { Init } from "../../types/userDataType";
import { redirect } from "next/navigation";
const userReducer = createSlice({
  name: "userData",
  initialState,
  reducers: {
    hardRefresh(state: Init) {
      const data = localStorage.getItem("userInfo");
      if (data) {
        const parsData = JSON.parse(data);
        state.userData = parsData;
      }
    },
    logout(state: Init) {
      localStorage.removeItem("userInfo");
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state: Init) => {
      console.log("this");
      state.loading = true;
      state.userData = initialState.userData;
      state.error = "";
    });
    builder.addCase(
      fetchUserData.fulfilled,
      (state: Init, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
        state.userData = payload;
        localStorage.setItem("userInfo", JSON.stringify(payload));
        redirect("/dashbord");
      }
    );
    builder.addCase(fetchUserData.rejected, (state, action) => {});
  },
});
export const {hardRefresh , logout} = userReducer.actions;
export default userReducer.reducer;
