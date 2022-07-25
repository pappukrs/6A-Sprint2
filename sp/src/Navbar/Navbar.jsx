import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "5px",
      }}
    >
      <div>
        <Link to={"/"}>HOME</Link>
      </div>
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
      <div>
        <Link to={"/blogs"}>Login</Link>
      </div>
      <div>
        <Link to={"/blogs/create"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
