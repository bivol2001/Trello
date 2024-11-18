import React from "react";
import { useNavigate } from "react-router";
import NavBarLog from "./NavBarLog";
import Janel from "../../Components/test";

const HomePageLog = () => {
  return (
    <div>
      <NavBarLog />
      <Janel text="janica" />
      <Janel text="salut" description="" />
      <Janel text="fata" description="tresa" isDescription />
    </div>
  );
};

export default HomePageLog;
