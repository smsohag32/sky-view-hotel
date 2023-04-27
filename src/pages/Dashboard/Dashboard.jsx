import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div>
        <h2>Welcome Mr. {user?.email}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
