import React from "react";
import { useContext } from "react";
import { context } from "../App";

const Display = () => {
  const { count } = useContext(context);
  return <div>{count}</div>;
};

export default Display;
