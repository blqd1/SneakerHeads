import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { removeUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
const UserPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);

    const handleLogoutClick = () => {
        dispatch(removeUser());
        navigate("/");
    };
    return (
        <div>
            <div>
                <h1 className="text-3xl">Hello {user?.email}!</h1>
            </div>
            <button
                className="uppercase border-black border py-3 px-6 hover:bg-gray-300 transition-all duration-300 bg-white"
                onClick={handleLogoutClick}
            >
                logout
            </button>
        </div>
    );
};

export default UserPage;
