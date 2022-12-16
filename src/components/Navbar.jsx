import { useAtom, atom } from "jotai";
import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import React, { useState, useEffect } from "react";

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

  const handleChangeTheme = () => {
    setDarkMode(darkMode ? false : true)
    localStorage.setItem("theme", darkMode);
  }


  
  useEffect(() => {
    const lastTheme = localStorage.getItem("theme");
    if (lastTheme ==='true'){
      setDarkMode(false)
    }else{
      setDarkMode(true)
    }
  }, []);

  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-3 md:py-5 absolute w-full h-20 z-10 bg-black">
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <h1 className="mr-10 font-bold text-lg text-white md:text-2xl ml-3 hidden sm:block">
          MovieList
        </h1>
      </div>
      <div className="flex items-center">
        <form action="/" method="GET">
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
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7 ml-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>
      </div>

      <div>
        <button
          onClick={() => handleChangeTheme()}
          className="w-12 h-12 mr-3"
        >
          {themeIcon()}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
