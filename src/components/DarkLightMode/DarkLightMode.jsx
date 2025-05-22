import React, { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const DarkLightMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="btn bg-[#1ba6e2] text-white flex items-center gap-2"
      >
        {theme === "dark" ? (
          <>
            <CiLight size={20} />
            <span>Light</span>
          </>
        ) : (
          <>
            <CiDark size={20} />
            <span>Dark</span>
          </>
        )}
      </button>
    </div>
  );
};

export default DarkLightMode;
