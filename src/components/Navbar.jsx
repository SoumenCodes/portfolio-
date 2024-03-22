import React, { useState } from "react";
import Logo from "../assets/MYLOGO.png";
import "../css/Style.css";

function Navbar() {
  // React component
  const [isChecked, setIsChecked] = useState(false);
  function Switch() {
    const handleToggle = () => {
      setIsChecked((prev) => !prev);
      console.log(isChecked);
    };

    return (
      <label class="switch">
        <input
          class="cb"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span class="toggle">
          <span class="left">off</span>
          <span class="right">on</span>
        </span>
      </label>
    );
  }

  return (
    <div
      style={{ backgroundColor: !isChecked ? "" : "#212121" }}
      className="flex row  justify-between items-center "
    >
      <div>
        <img src={Logo} alt="" srcset="" style={{ height: "70px" }} />
      </div>
      <div style={{ marginRight: "30px" }}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 stroke-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg> */}
        <Switch />
      </div>
    </div>
  );
}

export default Navbar;
