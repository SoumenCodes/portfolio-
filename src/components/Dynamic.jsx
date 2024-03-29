import React from "react";
import { useParams } from "react-router-dom";

function Dynamic() {
  const prams = useParams();

  return <div>Dynamic {prams.menuOption} </div>;
}

export default Dynamic;
