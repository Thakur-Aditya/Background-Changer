import { useState } from "react";
import Button from "./Button"

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <Button newColor="red"/>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setColor("blue");
              }}
            >
              blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            >
              green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#242424" }}
              onClick={() => {
                setColor("#141414");
              }}
            >
              #242424
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
