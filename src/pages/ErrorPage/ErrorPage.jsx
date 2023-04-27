import { Button } from "flowbite-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);
  return (
    <div className="flex justify-center text-center items-center h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl text-red-500 font-bold">
          {error.status || 404}
        </h1>
        <p>{error.statusText}</p>
        <div className="mt-10">
          <Link to="/">
            <div>
              <Button gradientMonochrome="failure">Back to Home</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
