import { useAtom, atom } from "jotai";
import { useState } from "react";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import { ReactComponent as Sun } from "../assets/Sun.svg";

export const themeState = atom(false);


function Navbar() {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const themeIcon = () => {
    if (darkMode) {
      return <Sun />;
    } else {
      return <Moon />;
    }
  };

  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-3 md:py-5 absolute w-full h-20 z-10 bg-black">
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <h1 className="mr-10 font-bold text-lg text-white md:text-2xl ml-3 hidden sm:block">
          MovieList
        </h1>
      </div>
      <form>
        <div className="relative">
          <input
            placeholder="What do you want to watch?"
            className="p-1 px-3 text-[#ffffff] rounded-md bg-transparent border-2 border-white placeholder-white w-auto md:w-[500px]"
            name="search"
            type="search"
            autoComplete="off"
          />
          <img
            src="/search.svg"
            alt="logo"
            className="w-4 h-4 absolute right-3 bottom-2.5"
          />
        </div>
      </form>
      <div>
        <button
          onClick={() => setDarkMode(darkMode ? false : true)}
          className="w-12 h-12 mr-3"
        >
          {themeIcon()}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
