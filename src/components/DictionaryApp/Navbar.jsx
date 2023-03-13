import React, { useEffect } from "react";

// icons
import { BiBook } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

//context
import useFontContext from "../../hooks/useFontContext";
import useThemeContext from "../../hooks/useThemeContext";

const Navbar = () => {
  const { setFont } = useFontContext();
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-between py-5">
      <BiBook className="w-8 h-8 text-custom-gray dark:text-custom-blue" />

      <div className="flex space-x-4">
        <select
          className="border-2 border-custom-gray rounded-md outline-none dark:bg-custom-blue dark:text-gray-200"
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="serif">Serif</option>
          <option value="sans">Sans</option>
          <option value="mono">Mono</option>
        </select>
        {/* line */}
        <div className="h-6 w-0.5 bg-custom-gray"></div>

        <button onClick={handleThemeSwitch}>
          {theme == "dark" ? (
            <MdOutlineLightMode className="w-6 h-6 text-custom-blue" />
          ) : (
            <MdOutlineDarkMode className="w-6 h-6 text-custom-gray" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
