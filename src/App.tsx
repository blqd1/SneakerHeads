import Header from "./components/Layouts/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setCurrentUser } from "./store/authSlice";
import UserPage from "./pages/UserPage";
function App() {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth.token);
    console.log(token);
    React.useEffect(() => {
        if (token) {
            axios
                .get("https://13ff161a782d7bb3.mokky.dev/auth_me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    dispatch(setCurrentUser({ user: res.data, token: token }));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);
    return (
        <div className="bg-gray-200 font-fjalla">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/profile" element={<UserPage />} />
            </Routes>
        </div>
    );
}

export default App;
