import React, { useState } from "react";
import Navbar from "../Components/HomeComponents/NavBar";
import RegSection from "../Components/HomeComponents/RegistrationSection";
import { ToastContainer, Flip } from "react-toastify";
import { getalldeams } from "../api/request";

const HomePage = () => {
  



  
  
  return (
    <div>
      <Navbar />
      <RegSection />
      <ToastContainer
        position="bottom-right"
        transition={Flip}
        draggablePercent={60}
        hideProgressBar={true}
        closeButton={false}
        toastClassName="Auf"
        limit={1}
      />
    </div>
  );
};

export default HomePage;
