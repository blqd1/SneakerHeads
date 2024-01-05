import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Sun from "../assets/sun.svg";
import Cart from "../assets/cart.svg";
import User from "../assets/user.svg";
const Header = () => {
    return (
        <header className="bg-white py-5 px-10 flex items-center justify-around border-b border-gray-200 mb-5">
            <div>
                <img src={Logo} alt="logo" className="w-40" />
            </div>
            <nav>
                <ul className="flex justify-between gap-20 items-center">
                    <li>
                        <Link
                            className="relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                            to="/women"
                        >
                            Women
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                            to="/men"
                        >
                            Men
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                            to="/children"
                        >
                            Children
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="relative text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                            to="/accesories"
                        >
                            Accesories
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-between gap-5">
                <div className="hover:bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                    <img
                        src={Sun}
                        alt="theme"
                        className="w-10 hover:cursor-pointer"
                    />
                </div>
                <div className="hover:bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                    <img
                        src={Cart}
                        alt="cart"
                        className="w-10 hover:cursor-pointer"
                    />
                </div>
                <div className="hover:bg-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                    <img
                        src={User}
                        alt="user"
                        className="w-10 hover:cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
