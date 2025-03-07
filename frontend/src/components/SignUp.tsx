import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import { TsignUpInput } from "@himanshugupta123/medium-common";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signUpUser } from "../utils/login/helper";

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TsignUpInput>();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (resp) => {
      if (resp.success) {
        toast.success(resp.message ?? "Signed up successfuy");
        navigate("/login");
        return;
      }

      toast.error(resp.message);
    },
    onError: (err) => {
      toast.error(err.message ?? "Something went wrong");
    },
  });

  const onSubmit = async (data: TsignUpInput) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-96">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Create Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter your name"
          />
          <p className={classnames("text-red-500 text-xs mt-1 h-4")}>
            {errors?.name?.message}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Enter your email"
          />
          <p className={classnames("text-red-500 text-xs mt-1 h-4")}>
            {errors?.email?.message}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter your password"
          />
          <p className={classnames("text-red-500 text-xs mt-1 h-4")}>
            {errors?.password?.message}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all duration-200 shadow-md"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-medium hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
