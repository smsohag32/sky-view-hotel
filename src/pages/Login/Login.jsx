import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isUserLogin, setIsUserLogin] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  console.log(location);
  //   handle user login
  const handleLoginUser = (e) => {
    setIsUserLogin(false);
    e.preventDefault();
    setError("");
    setSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Login Successfully.");
        setIsUserLogin(true);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setIsUserLogin(false);
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col w-[50%] mt-4 mx-auto h-[70vh] justify-center gap-4"
        >
          <div>
            <h4 className="font-bold text-2xl mb-5 text-center">
              Please Login
            </h4>
            <p className="text-center text-red-600">
              <small>{error}</small>
            </p>
            <Alert color={`${isUserLogin ? "success" : ""}`}>
              <span>
                {isUserLogin && <span className="font-medium">Success! </span>}{" "}
                {success}
              </span>
            </Alert>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              name="email"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" name="accept" />
            <Label htmlFor="remember">Accept terms and condition.</Label>
          </div>
          <Button type="submit">Login</Button>
          <div>
            <p>
              Don't have an account please{" "}
              <Link
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
