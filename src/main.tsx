import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n"
// import "./assets/scss/socialv.scss";
{
  /* The following line can be included in your src/index.js or App.js file */
}




createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>
);
