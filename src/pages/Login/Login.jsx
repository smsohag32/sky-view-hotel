import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <form className="flex flex-col w-[50%] mx-auto h-[80vh] justify-center gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
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
