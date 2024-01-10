import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";
import User from "../../assets/user.svg";
import { useAppSelector } from "../../hooks/hooks";
const Header = () => {
    const user = useAppSelector((state) => state.auth.user);
    return (
        <header className="bg-white py-5 flex items-center justify-between px-5 border-b border-gray-200 mb-5 ">
            <div className="flex-row flex items-center gap-3 bg-slate-300 py-2 px-2">
                <img src={Logo} alt="logo" className="w-40" />
                <h1 className="text-6xl font-lemon">SNEAKER HEADS</h1>
            </div>
            <Link to="/">
                <button className="text-2xl uppercase hover:tracking-wider border-black border py-3 px-6 hover:bg-gray-300 transition-all duration-300">
                    SHOP NOW
                </button>
            </Link>

            <div className="flex justify-between gap-5">
                <div className="hover:bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300">
                    <img
                        src={Cart}
                        alt="cart"
                        className="w-10 hover:cursor-pointer"
                    />
                </div>

                <Link to={`${user ? "/profile" : "/signin"}`}>
                    <div className="hover:bg-gray-300 transition-all duration-300 w-14 h-14 rounded-full flex items-center justify-center">
                        <img
                            src={User}
                            alt="user"
                            className="w-10 hover:cursor-pointer"
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
