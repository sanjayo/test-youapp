import React, { useEffect, useState } from "react";
import { loginUser } from "@/api/service";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/auth";

import customIcon from "@/components/icon/index";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import Alert from "@/components/alert/alert";

const Login = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    usernameORemail: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const handleLogin = async () => {
    const loginUsername = {
      username: dataLogin?.usernameORemail,
      email: "",
      password: dataLogin?.password,
    };
    const loginEmail = {
      username: "",
      email: dataLogin?.usernameORemail,
      password: dataLogin?.password,
    };
    const response = await loginUser(
      dataLogin?.usernameORemail?.includes("@") ? loginEmail : loginUsername
    );
    if (response?.access_token) {
      localStorage.setItem("token", response?.access_token);
      showAlert(response?.message, "success");
      router.push("/profile");
    } else {
      showAlert(response?.message, "error");
    }
  };

  return (
    <div className="bg-gradient-radial">
      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={hideAlert} />
      )}
      <div className="min-h-screen flex justify-center">
        <div className="p-8 rounded shadow-md w-full max-w-md">
          <div className="flex mb-20">
            <ChevronLeftIcon className="w-7 h-7" />
            <h2 className="text-xl font-bold">Back</h2>
          </div>
          <h2 className="text-2xl font-bold mb-5 ml-5">Login</h2>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="bg-white bg-opacity-5 focus:outline-none w-full rounded-md py-4 px-4 appearance-none"
              placeholder="Enter Username/Email"
              onChange={(e) =>
                setDataLogin({ ...dataLogin, usernameORemail: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="bg-white bg-opacity-5 focus:outline-none w-full rounded-md py-4 px-4 appearance-none"
                placeholder="Enter Password"
                onChange={(e) =>
                  setDataLogin({ ...dataLogin, password: e.target.value })
                }
              />
              {showPassword ? (
                <span
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {customIcon.iconEyeCross}
                </span>
              ) : (
                <span
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {customIcon.iconEye}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white text-base font-bold py-4 px-4 rounded-md hover:bg-gradient-button focus:outline-none focus:bg-gradient-button focus:ring focus:bg-gradient-button bg-gradient-button shadow-gradient-button"
            onClick={handleLogin}
          >
            Login
          </button>
          <h2 className="text-md text-center font-bold my-10">
            No account?{" "}
            <a href="/register" className="color-gradient-gold underline">
              Register here
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
