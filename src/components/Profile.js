import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./auth";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    </div>
  );
};
