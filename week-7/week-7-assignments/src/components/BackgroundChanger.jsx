import React from "react";
import { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");
  return (
    <div className="h-screen">
      <div
        className=" flex gap-10 justify-center items-end h-full pb-20"
        style={{
          backgroundColor: `${color}`,
        }}
      >
        <div className="bg-white flex gap-10 p-4 rounded-xl shadow-lg shadow-gray-500/50">
          <button
            onClick={() => setColor("red")}
            className="px-8 py-2 rounded-2xl  text-black"
            style={{
              backgroundColor: `red`,
            }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-8 py-2 rounded-2xl  text-black"
            style={{
              backgroundColor: `yellow`,
            }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("black")}
            className="px-8 py-2 rounded-2xl  text-black text-white"
            style={{
              backgroundColor: `black`,
            }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("purple")}
            className="px-8 py-2 rounded-2xl  text-black"
            style={{
              backgroundColor: `purple`,
            }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-8 py-2 rounded-2xl text-black"
            style={{
              backgroundColor: `green`,
            }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-8 py-2 rounded-2xl text-black"
            style={{
              backgroundColor: `blue`,
            }}
          >
            Blue
          </button>
          <button
            style={{
              backgroundColor: `orangered`,
            }}
            className="px-8 py-2 rounded-2xl  text-black"
            onClick={() => setColor("orangered")}
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
