import React, { useEffect, useRef, useState } from "react";
import customIcon from "@/components/icon/index";
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

import { getProfile, loginUser, updateProfile } from "@/api/service";

import EditProfile from "@/components/profile/editProfile";
import { useRouter } from "next/router";
import moment from "moment";

const EditInterest = () => {
  const router = useRouter();
  const [dataProfile, setDataProfile] = useState([]);

  const getData = async () => {
    const response = await getProfile();
    console.log("response", response);
    if (response?.data?.interests?.length > 0) {
      setTags(response?.data?.interests);
      setDataProfile(response?.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const text = inputRef.current.innerText;
    setTagInput(text);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();

      if (tagInput.trim() !== "") {
        setTags([...tags, tagInput.trim()]);
        inputRef.current.innerText = "";
      }
    }
  };

  const handleTagRemove = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleEditInterest = async () => {
    const data = {
      name: dataProfile?.name,
      birthday: moment(dataProfile?.birthday).format("YYYY-MM-DD"),
      height: Number(dataProfile?.height),
      weight: Number(dataProfile?.weight),
      interests: tags,
    };
    const response = await updateProfile(data);
    router.push("/profile");
  };

  return (
    <div className="bg-gradient-radial">
      <div className="min-h-screen flex justify-center">
        <div className="p-3 rounded shadow-md w-full max-w-md">
          <div className="flex mb-12 items-center justify-between">
            <div
              className="flex cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <ChevronLeftIcon className="w-6 h-6" />
              <h2 className="text-md font-bold">Back</h2>
            </div>
            <h2
              className="text-md font-bold color-gradient-blue cursor-pointer"
              onClick={handleEditInterest}
            >
              Save
            </h2>
          </div>
          <div className="p-5">
            <h2 className="text-md font-bold color-gradient-gold mb-5">
              Tell everyone about yourself
            </h2>
            <h2 className="text-2xl text-white font-bold mb-5">
              What interest you?
            </h2>
            <div className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 appearance-none text-right border-white">
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 m-1 p-2 rounded-lg"
                  >
                    {tag}
                    <button
                      onClick={() => handleTagRemove(index)}
                      className="ml-2 focus:outline-none"
                    >
                      x
                    </button>
                  </div>
                ))}
                <div
                  ref={inputRef}
                  contentEditable
                  onInput={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  className="p-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInterest;
