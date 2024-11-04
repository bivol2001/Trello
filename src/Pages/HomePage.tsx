import React from "react";
import Navbar from "../Components/HomeComponents/NavBar";
import RegSection from "../Components/HomeComponents/RegistrationSection";
import { ToastContainer, Flip } from "react-toastify";
import { getalldeams } from "src/api/request";
import { log } from "console";

const HomePage = () => {
  // const real = getalldeams()
  // console.log(real);
  
  
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
