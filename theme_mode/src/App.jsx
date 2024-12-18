import { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

function App() {
  const [toggle, isToggle] = useState(false);

  const handleClick = () => {
    isToggle(!toggle);
  };
  return (
    <>
      <div
        className={`${
          toggle ? "bg-black text-white" : "bg-white text-black"
        } h-screen w-full`}
      >
        <div className="flex justify-center items-center h-screen text-3xl">
        <div className="p-8 bg-gray-200 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
          <button onClick={handleClick}>
            {toggle ? <FaToggleOn /> : <FaToggleOff />}
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
