import React, { useEffect, useRef, useState } from "react";
import customIcon from "@/components/icon/index";
import {
  ChevronLeftIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

import { getProfile, updateProfile } from "@/api/service";
import { useRouter } from "next/router";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const EditProfile = ({ dataProfile }) => {
  const router = useRouter();
  const [imgPrev, setImgPrev] = useState(null);
  const [dataEdit, setDataEdit] = useState({
    name: dataProfile?.name ?? "",
    birthday: new Date(dataProfile?.birthday) ?? "",
    height: dataProfile?.height ?? 0,
    weight: dataProfile?.weight ?? 0,
  });

  const getData = async () => {
    const response = await getProfile();
  };

  useEffect(() => {
    // getData();
  }, []);

  const handleEdit = async () => {
    const data = {
      name: dataEdit?.name,
      birthday: moment(dataEdit?.birthday).format("YYYY-MM-DD"),
      height: Number(dataEdit?.height),
      weight: Number(dataEdit?.weight),
    };
    const response = await updateProfile(data);
    window.location.reload();
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImgPrev(previewURL);
    }
  };

  return (
    <div className="mb-5 p-5 rounded-2xl bg-card">
      <div className="flex mb-5 justify-between">
        <div className="flex items-start">
          <h2 className="text-md font-bold">About</h2>
        </div>
        <div className="flex items-start cursor-pointer">
          <h2 className="color-gradient-gold" onClick={handleEdit}>
            Save & Update
          </h2>
        </div>
      </div>
      <div className="flex mb-5 items-center gap-5">
        <div className="flex items-start">
          <div
            className="flex items-center justify-center w-full rounded-xl cursor-pointer bg-white bg-opacity-5"
            style={{
              backgroundImage: `url(${imgPrev !== null ? imgPrev : ""})`,
              backgroundSize: `cover`,
              padding: `${imgPrev !== null ? "12px" : "0px"}`,
            }}
          >
            <label htmlFor="dropzone-file">
              <div className="flex items-center justify-center p-5">
                {imgPrev == null ? customIcon?.iconPlus : ""}
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleUpload}
              />
            </label>
          </div>
        </div>
        <h2>Add image</h2>
      </div>
      <div className="flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Display Name:</h2>
        <input
          type="text"
          className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 text-right border-white border-opacity-20 border-2"
          placeholder="Enter name"
          value={dataEdit?.name}
          onChange={(e) => setDataEdit({ ...dataEdit, name: e.target.value })}
        />
      </div>
      <div className="relative flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Gender:</h2>
        <select
          type="text"
          className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 text-right border-white border-opacity-20 border-2"
          placeholder="Select Gender"
        >
          <option
            className="bg-normal text-white"
            defaultValue="Select Gender"
            disabled
          >
            Select Gender
          </option>
          <option className="bg-normal text-white" value="Male">
            Male
          </option>
          <option className="bg-normal text-white" value="Female">
            Female
          </option>
        </select>
      </div>
      <div className="flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Birthday:</h2>
        <div className="bg-white bg-opacity-5 w-full rounded-lg py-3 px-4 appearance-none text-right border-white border-opacity-20 border-2">
          <DatePicker
            className="bg-transparent appearance-none focus:outline-none text-right"
            selected={dataEdit?.birthday}
            onChange={(e) => setDataEdit({ ...dataEdit, birthday: e })}
            dateFormat="dd MM yyyy"
            placeholderText={"DD MM YYYY"}
          />
        </div>
      </div>
      <div className="flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Horoscope:</h2>
        <input
          type="text"
          className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 appearance-none text-right border-white border-opacity-20 border-2"
          placeholder="--"
          readOnly
        />
      </div>
      <div className="flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Zodiac:</h2>
        <input
          type="text"
          className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 appearance-none text-right border-white border-opacity-20 border-2"
          placeholder="--"
          readOnly
        />
      </div>
      <div className="flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Height:</h2>
        <input
          type="text"
          className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 appearance-none text-right border-white border-opacity-20 border-2"
          placeholder="Add height"
          value={dataEdit.height == 0 ? "" : dataEdit?.height + " cm"}
          onChange={(e) =>
            setDataEdit({
              ...dataEdit,
              height: e.target.value.replace(/[^0-9]/g, ""),
            })
          }
        />
      </div>
      <div className="flex mb-3 justify-between items-center">
        <h2 className="w-52 text-white text-opacity-30">Weight:</h2>
        <input
          type="text"
          className="bg-white bg-opacity-5 focus:outline-none w-full rounded-lg py-3 px-4 appearance-none text-right border-white border-opacity-20 border-2"
          placeholder="Add weight"
          value={dataEdit.weight == 0 ? "" : dataEdit?.weight + " kg"}
          onChange={(e) =>
            setDataEdit({
              ...dataEdit,
              weight: e.target.value.replace(/[^0-9]/g, ""),
            })
          }
        />
      </div>
    </div>
  );
};

export default EditProfile;
