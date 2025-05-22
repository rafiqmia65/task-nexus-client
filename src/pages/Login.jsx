import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignUp, setUser } = use(AuthContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        Swal.fire({
          title: `${loggedUser.displayName}'s your successfully Logged In`,
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorText(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((result) => {
        const newUser = result.user;

        Swal.fire({
          title: `${newUser.displayName}'s your are successfully Logged In`,
          text: "You clicked the button!",
          icon: "success",
        });

        setUser(newUser);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="min-h-screen pt-30 pb-10  flex items-center justify-center p-6">
      <div className=" p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full input "
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full input"
            required
          />
          {errorText && <p className="text-red-500 text-sm">{errorText}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            You Have No Account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="mb-2 text-gray-600">Or Sign In With</p>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center items-center gap-2 border px-4 py-2 rounded  transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
