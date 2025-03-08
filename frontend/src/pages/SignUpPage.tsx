import React from "react";
import SignUp from "../components/Auth/SignUp";
import TestimonialCard from "../components/Auth/Quote";

const SignUpPage = () => {
  return (
    <div className="h-screen w-full flex flex-row items-center justify-center">
      <div className="md:w-1/2 bg-white h-full flex flex-col items-center justify-center">
        <SignUp />
      </div>

      <div className="w-1/2 bg-gray-300 h-full md:flex flex-col items-center justify-center hidden">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default SignUpPage;
