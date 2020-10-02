import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit, errors } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9  text-white">
          Welcome Back!
        </h2>
      </div>
      <input type="hidden" name="remember" value="true" />
      <div className="mt-6">
        <input
          ref={register({ required: true })}
          aria-label="Email address"
          name="email"
          type="email"
          value={email}
          className={` ${
            errors.email ? "border-red-100" : "border-gray-300 "
          } appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address *"
        />
      </div>
      <div className="mt-6">
        <input
          ref={register({ required: true })}
          aria-label="Password"
          name="password"
          type="password"
          aria-invalid={errors.password ? true : false}
          value={password}
          className={`${
            errors.password ? "border-red-100" : "border-gray-300 "
          } appearance-none rounded-none relative block w-full px-3 py-2 border  placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Set A Password *"
        />
      </div>
      <span className="float-right text-green-100 mt-4">
        <a href="/">Forgot Password?</a>
      </span>
      <button
        type="submit"
        className="bg-green-100
            hover:bg-blue-700 text-white  mt-4 py-2  px-10 w-full"
      >
        LOG IN
      </button>
    </form>
  );
}
