import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen pt-30 pb-10 bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form 
        // onSubmit={handleRegister} 
        className="space-y-4">
            
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full input "
            // onChange={handleChange}
            required
          />
          
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full input"
            // onChange={handleChange}
            required
          />
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
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
          <p className="mb-2 text-gray-600">Or sign in with</p>
          <button
            // onClick={}
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

export default Login;