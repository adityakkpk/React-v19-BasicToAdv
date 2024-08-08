import React, { createContext, useState, use } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);

  return (
    <div
      className={`h-[300px] w-[300px] rounded-md flex gap-5 flex-col justify-center items-center ${
        theme === "dark" ? "bg-neutral-800" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl">Dark and Light Theme</h1>
      <button
        className={`px-2 py-2  rounded-md hover:bg-slate-700 ${
            theme === "dark" ? "bg-slate-600 text-gray-300" : "bg-sky-600 text-white"
          }`}
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
};

export default DarkLight;
