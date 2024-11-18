import React from "react";

interface Janelprops {
  text: string;
  description?: string;
  isDescription?: boolean;
}

const Janel = ({ text, description, isDescription = false }: Janelprops) => {
  console.log(description);
  return (
    <div>
      <h1>{text}</h1>
      {isDescription && <h2>{description ? description : "default"}</h2>}
    </div>
  );
};

export default Janel;
