import React, { useEffect, useState } from "react";
import customIcon from "@/components/icon/index";
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

import { getProfile } from "@/api/service";

import EditProfile from "@/components/profile/editProfile";
import { useRouter } from "next/router";
import moment from "moment";

const Login = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [dataProfile, setDataProfile] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const getData = async () => {
    const response = await getProfile();
    setDataProfile(response?.data);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  console.log("dataProfile", dataProfile);

  return (
    <div className="bg-normal">
      <div className="min-h-screen flex justify-center">
        <div className="p-3 rounded shadow-md w-full max-w-md">
          <div className="flex mb-5 items-center justify-between">
            <div
              className="flex cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <ChevronLeftIcon className="w-6 h-6" />
              <h2 className="text-md font-bold">Back</h2>
            </div>
            <h2 className="text-md font-bold">@{dataProfile?.username}</h2>
            <div className="col">
              <button type="button">
                <EllipsisHorizontalIcon
                  className="w-10 h-10"
                  onClick={toggleDropdown}
                />
              </button>
              {dropdown ? (
                <div className="z-10 top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li className="cursor-pointer" onClick={handleLogout}>
                      <h2 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Log out
                      </h2>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-5 rounded-2xl bg-card-active">
            <div className="flex p-5 h-52 justify-between">
              <div className="flex items-end">
                <div className="col">
                  <h2 className="text-md font-bold mb-3">
                    @{dataProfile?.username},{" "}
                    {dataProfile?.birthday == undefined
                      ? ""
                      : moment().diff(dataProfile?.birthday, "years")}
                  </h2>
                  <div className="flex gap-3">
                    {dataProfile?.horoscope == undefined ? (
                      ""
                    ) : (
                      <div className="bg-zodiac px-5 py-3 rounded-full text-sm font-bold">
                        {dataProfile?.horoscope}
                      </div>
                    )}
                    {dataProfile?.zodiac == undefined ? (
                      ""
                    ) : (
                      <div className="bg-zodiac px-5 py-3 rounded-full text-sm font-bold">
                        {dataProfile?.zodiac}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-start cursor-pointer">
                {customIcon?.iconEdit}
              </div>
            </div>
          </div>
          {edit ? (
            <EditProfile edit={true} dataProfile={dataProfile} />
          ) : (
            <div className="mb-5 p-5 rounded-2xl bg-card">
              <div className="flex mb-5 justify-between">
                <div className="flex items-start">
                  <h2 className="text-md font-bold">About</h2>
                </div>
                <div
                  className="flex items-start cursor-pointer"
                  onClick={() => setEdit(true)}
                >
                  {customIcon?.iconEdit}
                </div>
              </div>
              {dataProfile?.name == undefined ? (
                <>
                  <div className="flex mb-2 justify-between">
                    <div className="flex items-start">
                      <h5 className="text-md text-white text-opacity-55">
                        Add in your your to help others know you better
                      </h5>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex mb-2 gap-1">
                    <h2 className="text-white text-opacity-30">Birthday:</h2>
                    <h2 className="text-white">
                      {moment(dataProfile?.birthday).format("DD / MM / YYYY")}{" "}
                      (Age {moment().diff(dataProfile?.birthday, "years")})
                    </h2>
                  </div>
                  <div className="flex mb-2 gap-1">
                    <h2 className="text-white text-opacity-30">Horoscope:</h2>
                    <h2 className="text-white">{dataProfile?.horoscope}</h2>
                  </div>
                  <div className="flex mb-2 gap-1">
                    <h2 className="text-white text-opacity-30">Zodiac:</h2>
                    <h2 className="text-white">{dataProfile?.zodiac}</h2>
                  </div>
                  <div className="flex mb-2 gap-1">
                    <h2 className="text-white text-opacity-30">Height:</h2>
                    <h2 className="text-white">{dataProfile?.height} cm</h2>
                  </div>
                  <div className="flex mb-2 gap-1">
                    <h2 className="text-white text-opacity-30">Weight:</h2>
                    <h2 className="text-white">{dataProfile?.weight} kg</h2>
                  </div>
                </>
              )}
            </div>
          )}
          <div className="mb-5 p-5 rounded-2xl bg-card">
            <div className="flex mb-5 justify-between">
              <div className="flex items-start">
                <h2 className="text-md font-bold">Interest</h2>
              </div>
              <div
                className="flex items-start cursor-pointer"
                onClick={() => router.push("/profile/interest")}
              >
                {customIcon?.iconEdit}
              </div>
            </div>
            <div className="flex mb-2 justify-between">
              <div className="flex items-start gap-3">
                {dataProfile?.interests?.length == 0 ? (
                  <h5 className="text-md text-white text-opacity-55">
                    Add in your interest to find a better match
                  </h5>
                ) : (
                  dataProfile?.interests?.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="bg-zodiac px-5 py-3 rounded-full text-sm font-bold"
                      >
                        {item}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
