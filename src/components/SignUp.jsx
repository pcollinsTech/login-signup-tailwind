import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, errors, handleSubmit } = useForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log("e", e);
    console.log("errors", errors);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9  text-white">
          Sign Up for Free
        </h2>
      </div>
      <input type="hidden" name="remember" value="true" />
      <div className="flex justify-content-between mt-6">
        <input
          ref={register({ required: true, minLegnth: 3 })}
          type="text"
          placeholder="First Name *"
          name="firstName"
          value={firstName}
          className={`${
            errors.firstName ? "border-red-100" : "border-gray-300 "
          } appearance-none rounded-none relative block w-full px-3 py-2 mr-1 border placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          ref={register({ required: true, minLegnth: 3 })}
          type="text"
          placeholder="Last Name *"
          value={lastName}
          name="lastName"
          className={`${
            errors.lastName ? "border-red-100" : "border-gray-300 "
          } appearance-none rounded-none relative block w-full px-3 py-2 ml-1 border placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5`}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="rounded-md shadow-sm mt-6">
        <div>
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
      </div>

      <button
        type="submit"
        className="bg-green-100
        hover:bg-blue-700 text-white mt-6 py-2  px-10 w-full"
      >
        GET STARTED
      </button>
    </form>
  );
}
