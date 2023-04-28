import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Badge, Card } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full max-w-[1200px] mx-auto py-5 md:flex md:justify-between px-5">
      <div>
        <h2 className="text-3xl mb-2">Welcome Mr. {user?.displayName}</h2>
        <Badge color="info">New User</Badge>
        <div className="max-w-sm">
          <Card>
            <div className="flex flex-col  pb-10">
              <img
                className="mb-3   rounded-md shadow-sm"
                src={user?.photoURL}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user?.displayName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                {/* <span onClick={() => setIsEdit(!isEdit)}> */}
                <Link
                  to="/dashboard/edit"
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit Your Account
                </Link>
                {/* </span> */}
                <Link
                  to="/"
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Book A Room
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
