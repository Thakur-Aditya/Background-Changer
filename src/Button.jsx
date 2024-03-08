import { useState } from "react";


function Button({ newColor }) {
    const [color, setColor] = useState();
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: newColor }}
      onClick={() => {
        console.log("btn clicked");
        setColor(newColor);
      }}
    >
      {newColor}
    </button>
  );
}

export default Button;
