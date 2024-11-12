
import React, { useState, useEffect } from "react";

const App = () => {
  const colors = ["red", "yellow", "blue",];
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const changeTextColor = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor(randomColor);
    };

    const intervalId = setInterval(changeTextColor, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div style={{ padding: "20px" }}>
      <p style={{ color: textColor,fontSize:'40px' }}>
        Acesta este un text care își schimbă culoarea intermitent!
      </p>
    </div>
  );
};

export default App;
