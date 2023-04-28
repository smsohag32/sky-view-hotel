import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const EditAccount = () => {
  const { updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  //   handle updateUser data
  const handleUpdateUser = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="">
        <div>
          <form
            onSubmit={handleUpdateUser}
            className="flex flex-col w-full mx-auto gap-4 bg-blue-300 p-5 rounded-md"
          >
            <p className="text-center text-2xl font-bold">
              Update Your Account
            </p>
            {/* <p className="text-red-500 font-medium">{error}</p>
            <p className="text-green-500 font-bold">{success}</p> */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="Enter your email"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="Your Photo Url" />
              </div>
              <TextInput
                id="photo"
                type="url"
                name="photo"
                placeholder="Your Photo Url"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                required={true}
              />
            </div>
            <Button type="submit">Update</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
