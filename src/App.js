import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="page items-center">
      <div className="wrapper p-4">
        <div className="flex ">
          <button
            className={`${
              page === "signup" ? "bg-green-100" : "bg-blue-200"
            } hover:bg-blue-700 text-white  py-2 px-12 w-1/2`}
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>
          <button
            className={`${
              page === "login" ? "bg-green-100" : "bg-blue-200"
            } hover:bg-blue-700 text-white  py-2 px-12 w-1/2`}
            onClick={() => setPage("login")}
          >
            Log In
          </button>
        </div>
        <div className="content ">
          {page === "login" && <Login />}
          {page === "signup" && <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default App;
