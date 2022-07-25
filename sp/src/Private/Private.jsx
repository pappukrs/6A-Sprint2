import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { loginToken } = useSelector((state) => state.token.loginToken);

  if (!loginToken) {
    Navigate("/");
  }
  return <div>{children}</div>;
};

export default Private;
