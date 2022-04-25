import React from "react";
import { useNavigate } from "react-router-dom";

export const Courses = (props) => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <button className="btn btn-success" onClick={home}>
      Back to Home
    </button>
  );
};
