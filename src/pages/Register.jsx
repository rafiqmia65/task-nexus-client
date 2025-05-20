import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { user, setUser, createUser, updateUser, googleSignUp } =
    use(AuthContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const passIsValid = passwordRegex.test(password);

    if (!passIsValid) {
      return setErrorText(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;

        console.log(newUser);

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setErrorText(error.message);
            setUser(user);
          });

        Swal.fire({
          title: `${name}'s your account successfully created`,
          text: "You clicked the button!",
          icon: "success",
        });
        navigate("/");
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

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);

        setUser(newUser);

        Swal.fire({
          title: `${newUser.displayName}'s your account successfully created`,
          text: "You clicked the button!",
          icon: "success",
        });
        navigate("/");
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
    <div className="min-h-screen pt-30 pb-10 bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full input"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full input "
            required
          />
          <label className="label">PhotoUrl</label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="w-full input"
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
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="mb-2 text-gray-600">Or SignUp With</p>
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex justify-center items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 transition"
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

export default Register;
