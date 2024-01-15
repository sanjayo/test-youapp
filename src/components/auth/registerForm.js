import React, { useEffect, useState } from "react";
import { registerUser } from "@/api/service";
import { useRouter } from "next/router";

import customIcon from "@/components/icon/index";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Alert from "../alert/alert";

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowCPassword = () => {
    setShowCPassword(!showCPassword);
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const handleRegister = async () => {
    const data = {
      username: dataRegister?.username,
      email: dataRegister?.email,
      password: dataRegister?.password,
    };
    try {
      if (passMatch) {
        const response = await registerUser(data);
        if (response?.message === "User has been created successfully") {
          showAlert(response?.message, "success");
          setDataRegister({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else if (response?.message === "User already exists") {
          showAlert(response?.message, "error");
        }
      } else {
        showAlert("Password didnt match", "error");
      }
    } catch (err) {
      showAlert(err?.data?.message[0], "error");
      console.log("err", err?.data);
    }
    // router.push("/profile");
  };

  const handleKeyInPass = () => {
    if (
      dataRegister?.password !== dataRegister?.confirmPassword &&
      dataRegister?.confirmPassword !== ""
    ) {
      setPassMatch(false);
    } else {
      setPassMatch(true);
    }
  };

  useEffect(() => {}, [passMatch, dataRegister]);

  return (
    <div className="bg-gradient-radial">
      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={hideAlert} />
      )}
      <div className="min-h-screen flex justify-center">
        <div className="p-8 rounded shadow-md w-full max-w-md">
          <div
            className="flex mb-20 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            <ChevronLeftIcon className="w-7 h-7" />
            <h2 className="text-xl font-bold">Back</h2>
          </div>
          <h2 className="text-2xl font-bold mb-5 ml-5">Register</h2>
          <div className="mb-4">
            <input
              type="email"
              className="bg-white bg-opacity-5 focus:outline-none w-full rounded-md py-4 px-4 appearance-none"
              placeholder="Enter Email"
              value={dataRegister?.email}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="bg-white bg-opacity-5 focus:outline-none w-full rounded-md py-4 px-4 appearance-none"
              placeholder="Create Username"
              value={dataRegister?.username}
              onChange={(e) =>
                setDataRegister({ ...dataRegister, username: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-white bg-opacity-5 focus:outline-none w-full rounded-md py-4 px-4 appearance-none"
                placeholder="Enter Password"
                value={dataRegister?.password}
                onChange={(e) =>
                  setDataRegister({ ...dataRegister, password: e.target.value })
                }
                onKeyUp={handleKeyInPass}
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
          <div className="mb-4">
            <div className="relative">
              <input
                type={showCPassword ? "text" : "password"}
                className="bg-white bg-opacity-5 focus:outline-none w-full rounded-md py-4 px-4 appearance-none"
                placeholder="Confirm Password"
                value={dataRegister?.confirmPassword}
                onChange={(e) =>
                  setDataRegister({
                    ...dataRegister,
                    confirmPassword: e.target.value,
                  })
                }
                onKeyUp={handleKeyInPass}
              />
              {showCPassword ? (
                <span
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={handleShowCPassword}
                >
                  {customIcon.iconEyeCross}
                </span>
              ) : (
                <span
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={handleShowCPassword}
                >
                  {customIcon.iconEye}
                </span>
              )}
            </div>
            {!passMatch && dataRegister?.confirmPassword !== "" ? (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                <span className="font-medium">Password not Match!</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="w-full text-white text-base font-bold py-4 px-4 rounded-md hover:bg-gradient-button focus:outline-none focus:bg-gradient-button focus:ring focus:bg-gradient-button bg-gradient-button shadow-gradient-button"
            onClick={handleRegister}
          >
            Login
          </button>
          <h2 className="text-md text-center font-bold my-10">
            Have an account?{" "}
            <a href="/login" className="color-gradient-gold underline">
              Login here
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
