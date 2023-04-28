import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, logoutUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isUserRegister, setIsUserLogin] = useState(false);
  const navigate = useNavigate();
  // handle create user
  const handleCreateUser = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsUserLogin(false);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const photoUrl = e.target.photo.value;
    console.log(name, photoUrl);
    // firebase
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Your account create done.");
        setIsUserLogin(true);
        updateUserData(name, photoUrl);
        console.log(loggedUser);
        navigate("/login");
        logoutUser();
      })
      .catch((error) => {
        setError(error.message);
        setIsUserLogin(false);
      });
  };
  return (
    <div className="max-w-[1200px] py-5 mx-auto">
      <div>
        <form
          onSubmit={handleCreateUser}
          className="flex flex-col w-[50%] mx-auto min-h-[80vh] justify-center gap-4 bg-blue-300 p-5 rounded-md"
        >
          <p className="text-center text-2xl font-bold">Please Register Now.</p>
          <p className="text-red-500 font-medium">{error}</p>
          <p className="text-green-500 font-bold">{success}</p>
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              name="confirm"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" name="accept" />
            <Label htmlFor="remember">Accept terms and condition.</Label>
          </div>

          <Button type="submit">Register</Button>
          <div>
            <p>
              Already have an account{" "}
              <Link
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
