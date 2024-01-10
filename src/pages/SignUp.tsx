import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAppDispatch } from "../hooks/hooks";
import { setCurrentUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
type Inputs = {
    email: string;
    password: string;
};
const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios
            .post("https://13ff161a782d7bb3.mokky.dev/register", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res.data);
                dispatch(
                    setCurrentUser({
                        token: res.data.token,
                        user: res.data.data,
                    })
                );
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-4/12 flex flex-col items-center m-auto">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 mt-10 border-2 shadow-xl p-5 w-10/12 bg-white items-center mb-80"
            >
                <div className="flex flex-col gap-2 self-start pt-4 pl-5">
                    <h1 className="text-4xl text-blue-700">Sign Up</h1>
                    <span className="text-gray-800">
                        And start buying your favorite sneakers
                    </span>
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-base">
                        Email
                    </label>
                    <input
                        className="bg-white border border-black h-10 w-60 pl-1"
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <span className="text-sm text-red-600 ">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="password" className="text-base">
                        Password
                    </label>
                    <input
                        {...register("password", { required: true })}
                        placeholder="Password"
                        className="bg-white border border-black h-10 w-60 pl-1"
                    />
                    {errors.password && (
                        <span className="text-sm text-red-600 ">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-5">
                    <button
                        type="submit"
                        className="uppercase border-black border py-3 px-6 hover:bg-gray-300 transition-all duration-300"
                    >
                        sign up
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <span className="text-lg">Already have an account?</span>
                    <Link to="/signin">
                        <span className="text-blue-700 hover:text-gray-300 text-lg">
                            Sign In!
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
