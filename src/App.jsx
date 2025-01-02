import { useState } from "react";

function App() {
  const [color, setColor] = useState("#242424");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex justify-center flex-wrap gap-3 shadow-md bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none text-white font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none text-white font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-black font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#f43f5e")}
            className="outline-none text-black font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "#f43f5e" }}
          >
            Rose
          </button>
          <button
            onClick={() => setColor("#d8b4fe")}
            className="outline-none text-black font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "#d8b4fe" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("#f97316")}
            className="outline-none text-black font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "#f97316" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none text-white font-semibold px-8 rounded-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
