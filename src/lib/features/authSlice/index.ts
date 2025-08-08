import TokenService from "@/common/utils/tokenService";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IAuthState } from "./type";
import { authApi } from "@/lib/services/modules";

export const initialAuthState: IAuthState = {
    isAuthenticated: false,
    token: { 
        accessToken: "",
        refreshToken: undefined,
     },
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        setToken: (state, action: PayloadAction<{ accessToken: string }>) => {
            state.token = action.payload;
        },
        setLogout: (state) => {
            state.isAuthenticated = false;
            state.token = { accessToken: "", refreshToken: undefined };
        },
        setCredentials: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
            TokenService.setToken(action.payload.refreshToken);
            state.token.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state.token.refreshToken = action.payload.refreshToken;
        },
    },
      extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.token.accessToken = action.payload.accessToken;
          state.token.refreshToken = action.payload.refreshToken;
        });
      },
});

export const { setAuthenticated, setToken, setLogout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
