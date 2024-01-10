import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserData {
    id: number;
    email: string;
}

interface AuthData {
    token: string | null;
    user: UserData | null;
}

const initialState: AuthData = {
    token: localStorage.getItem("token") || "",
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<AuthData>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("token", state.token || "");
        },
        removeUser: (state) => {
            state.token = "";
            state.user = null;
            localStorage.removeItem("token");
        },
    },
});

export const { setCurrentUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
