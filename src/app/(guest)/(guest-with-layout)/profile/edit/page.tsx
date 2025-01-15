"use client";
import React, { useRef, useState } from "react";
import { FaInfoCircle, FaEdit, FaCamera } from "react-icons/fa";
import Modal from "@/components/ui/modal";

import { FormLayout } from "@/components/layouts";
import { Button } from "@/components/ui";
const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Hàm gọi khi nhấn vào icon camera
  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Kích hoạt thẻ input file
    }
  };
  return (
    <div className="w-11/12 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/4 flex flex-col gap-6 text-white">
        <div className="flex flex-col border border-zinc-400 rounded-lg">
          <div className="flex gap-1 items-center p-4 border-b border-zinc-500">
            <p className="font-bold">Profile Image</p>
            <FaInfoCircle />
          </div>
          <div className="p-4 flex justify-center relative">
            <div className="absolute top-2/3 right-20 lg:top-2/3 lg:right-16 p-2">
              {" "}
              {/* Dùng right-2 để đẩy camera qua phải */}
              <div
                className="tooltip bg-green-500 rounded-full p-3"
                data-tip="Change profile image"
              >
                <FaCamera
                  className="size-5 cursor-pointer"
                  onClick={handleCameraClick} // Thêm sự kiện nhấn vào icon
                />
              </div>
              {/* Thẻ input file ẩn, sử dụng ref để truy cập */}
              <input
                ref={fileInputRef}
                className="hidden"
                type="file"
                accept="image/*"
              />
            </div>
            <img
              src="https://harnishdesign.net/demo/html/metovo/images/authors/author-11.jpg"
              alt="Profile"
              className="rounded-full object-cover w-36 h-36 mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col border border-zinc-400 rounded-lg">
          <div className="flex gap-1 items-center p-2 border-b border-zinc-500">
            <p className="font-bold">Profile Banner </p>
            <FaInfoCircle />
          </div>
          <div className="p-4 flex justify-center relative">
            <div className="absolute top-2/3 p-2">
              <div
                className="tooltip bg-green-500 rounded-full p-3"
                data-tip="Change profile image"
              >
                <FaCamera
                  className="size-5 cursor-pointer"
                  onClick={handleCameraClick} // Thêm sự kiện nhấn vào icon
                />
              </div>
              {/* Thẻ input file ẩn, sử dụng ref để truy cập */}
              <input
                ref={fileInputRef}
                className="hidden"
                type="file"
                accept="image/*"
              />
            </div>
            <img
              src="https://harnishdesign.net/demo/html/metovo/images/authors/author-bg-1.jpg"
              alt=""
              className="rounded-md w-full h-28 object-cover mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-zinc-400 rounded-lg p-4">
          <div className="flex justify-center p-4">
            <img
              src="https://harnishdesign.net/demo/html/metovo/images/chain/ethereum.png"
              alt=""
              className="rounded-full w-16 h-16 lg:w-20 lg:h-20"
            />
          </div>
          <p className="text-center text-white font-extrabold text-2xl">
            9.459 ETH
          </p>
          <p className="text-center text-base text-gray-300">
            Available Balance
          </p>
          <div className="flex justify-between  py-2 ">
            <button className="text-green-500 font-semibold text-sm hover:underline">
              Deposit
            </button>
            <button className="text-green-500 font-semibold text-sm hover:underline">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <div className="flex flex-col gap-2 p-4 rounded-lg border border-zinc-500">
          <div className="flex items-center justify-between py-4 border-b border-zinc-800">
            <p className="text-white  font-bold">Organizational Details</p>

            <div className="flex flex-col gap-2 lg:gap-6 text-white">
              <button
                className=" text-green-500  text-sm lg:text-base flex gap-1 items-center font-bold py-1 px-3 rounded-lg hover:text-green-300"
                onClick={() => setIsModalOpen(true)}
              >
                <FaEdit className="text-green-500" />
                Edit
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-black text-2xl">
                    Organizational Detail
                  </p>
                  <form action="" className="text-black flex flex-col gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                      Name
                      <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Email
                      <input
                        type="text"
                        className="grow"
                        placeholder="daisy@site.com"
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Name
                      <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Email
                      <input
                        type="text"
                        className="grow"
                        placeholder="daisy@site.com"
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Address
                      <input type="text" className="grow" placeholder="Daisy" />
                    </label>

                    <div className="flex flex-col gap-1">
                      <p className="font-semibold">Establish_license</p>
                      <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold"> Operate_license</p>
                      <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2 border p-3 rounded-lg">
                        <p className="font-normal">Join date</p>
                        <p className="text-gray-500">20-12-2024</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="font-semibold">IsActive</p>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          defaultChecked
                        />
                      </div>
                    </div>

                    <Button
                      className="btn bg-green-700 text-base text-white"
                      type="button"
                      value="Save changes"
                    />
                  </form>
                </div>
              </Modal>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 lg:gap-4 lg:px-4">
              <div className="w-2/5 flex flex-col gap-3 py-2 text-gray-300 text-xs lg:text-base">
                <p>Name</p>
                <p>Email</p>
                <p>Code</p>
                <p>Address</p>
                <p>Bio</p>
                <p>Account type</p>
                <p>Establish_license</p>
                <p>Operate_license</p>
                <p>Role</p>
                <p>IsActive</p>
                <p>Join date</p>
              </div>
              <div className="w-3/5 flex flex-col gap-3 py-2 text-white text-xs lg:text-base">
                <p>Name</p>
                <p>Email</p>
                <p>Code</p>
                <p>Address</p>
                <p>Bio</p>
                <p>Account type</p>
                <p>Establish_license</p>
                <p>Operate_license</p>
                <p>Role</p>
                <div className="bg-green-800 rounded-2xl px-2 w-16 lg:w-20 text-center">
                  Active
                </div>
                <p>Join date</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-4 rounded-lg border border-zinc-500">
          <div className="flex items-center justify-between py-4 border-b border-zinc-800">
            <p className="text-white  font-bold">Personal Details</p>
            <div className="flex flex-col gap-2 lg:gap-6 text-white">
              <button
                className=" text-green-500  text-sm lg:text-base flex gap-1 items-center font-bold py-1 px-3 rounded-lg hover:text-green-300"
                onClick={() => setIsModalOpen(true)}
              >
                <FaEdit className="text-green-500" />
                Edit
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-black text-2xl">
                    Personal Details
                  </p>
                  <form action="" className="text-black flex flex-col gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                      Name
                      <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Email
                      <input
                        type="text"
                        className="grow"
                        placeholder="daisy@site.com"
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Bio
                      <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Phone
                      <input
                        type="number"
                        className="grow"
                        placeholder="0987654321"
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      Identity card
                      <input type="text" className="grow" placeholder="Daisy" />
                    </label>

                    <div className="flex justify-between">
                      <div className="flex gap-2 border p-3 rounded-lg">
                        <p className="font-normal">Join date</p>
                        <p className="text-gray-500">20-12-2024</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="font-semibold">IsActive</p>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <Button
                      className="btn bg-green-700 text-base text-white"
                      type="button"
                      value="Save changes"
                    />
                  </form>
                </div>
              </Modal>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-4 px-4">
              <div className="w-2/5  flex py-2 flex-col gap-3 text-gray-300 text-xs lg:text-base">
                <p>Name</p>
                <p>Email</p>
                <p>Code</p>
                <p>Bio</p>
                <p>Account type</p>
                <p>Role</p>
                <p>Phone</p>
                <p>Identity card</p>
                <p>IsActive</p>
                <p>Join date</p>
              </div>
              <div className="w-3/5  flex flex-col gap-3 py-2 text-white text-xs lg:text-base">
                <p>Trương Thị Cẩm Tú</p>
                <p>abc@gmail.com</p>
                <p>fghj9876545678976</p>
                <p>....</p>
                <p>Personal</p>
                <p>Role</p>
                <p>0987654321</p>
                <p>098765667654</p>
                <div className="bg-green-800 rounded-2xl px-2 w-16 lg:w-20 text-center">
                  Active
                </div>
                <p>20-12-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
