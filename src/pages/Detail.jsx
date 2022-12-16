import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { themeState } from "../components/Navbar";
import { recommendedState } from "./Home";
import { getMovie, getBanner, getRecommended } from "../feature/ApiService";
import CardHome from "../components/CardHome";
import { motion } from "framer-motion";
import YouTube, { YouTubeProps } from "react-youtube";
import { useLocation } from "react-router-dom";

function Detail() {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const [recommended, setRecommended] = useAtom(recommendedState);

  const {
    state: { demo, image, title, synopsis, director, type, releaseDate },
  } = useLocation();
  const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };
  const pageVariants = {
    initial: { scale: 0.2, opacity: 100 },
    in: { scale: 1, opacity: 1 },
    out: {
      scale: 0.2,
      opacity: 0,
      transition: { duration: 1, ...transition },
    },
  };

  const fetchApiCall = async () => {
    const recommendedList = await getRecommended();
    setRecommended(recommendedList);
  };

  const recommendList = () => {
    return recommended?.map((item) => (
      <CardHome
        width={"w-60"}
        height={"h-24"}
        id={item.id}
        title={item.title}
        image={item.image}
        demo={item.demo}
        synopsis={item.synopsis}
        releaseDate={item.release_date}
        director={item.director}
        type={item.type}
      />
    ));
  };

  useEffect(() => {
    fetchApiCall();
  }, []);

  return (
    <>
      <motion.div
        className={`w-full  h-screens ${
          darkMode ? "bg-[#192026] text-white" : "bg-[#ffffff] text-black"
        }`}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="flex flex-col justify-center items-center py-5   ">
          <YouTube
            videoId={`${demo}`}
            iframeClassName="w-[50rem] h-80 max1200:w-[35rem] max1000:w-[30rem] max1000:h-60 max800:w-[25rem] max800:h-48 max570:w-[20rem] max570:h-36 max450:w-[15rem] max320:w-[12rem] max320:h-32"
          />
        </div>

        <div
          className={`flex flex-row mt-20  ml-40 mr-auto max1000:ml-28 max700:ml-16  max380:ml-8 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <img
            src={image}
            alt="img"
            className="h-48 object-contain   w-48 max570:w-36 max570:h-36 max450:w-28 max450:h-28 max380:w-20 max380:h-20"
          />
          <div className="flex flex-col  my-auto ml-4">
            <div className="text-2xl font-semibold mb-8 mr-28 max700:text-base max570:mr-16 max570:text-sm max570:mb-2 max450:text-sm max450:mr-6 max380:mr-6 max320:mr-1">
              {title}
            </div>
            <div className="mb-2 max700:mr-20 max700:text-xs max570:text-[12px] max450:mr-12 max380:text-[9px] max450:mr-5 max450:mb-1 max320:mr-1">
              {" "}
              Release Date : {releaseDate}
            </div>
            <div className="max700:mr-20 max700:text-xs max570:text-[12px] max450:mr-12 max380:text-[9px] max450:mr-5 max320:mr-1">
              Director : {director}
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col mt-20 mx-40 max1000:mx-32 max800:mx-28 max700:mx-20 max450:mx-16 max380:mx-10 ">
            <div className="text-xl font-semibold mb-4 text-left max570:text-sm   ">
              Synopsis
            </div>
            <div className=" text-sm max570:text-[12px] ">{synopsis}</div>
          </div>
        </div>

        <div className="flex flex-col py-7">
          <div className="mx-40 text-left text-xl font-semibold mt-20 max800:ml-28 max1000:mx-32  max700:mx-20 max570:text-sm max450:mx-16 max380:mx-10 ">
            Recommended Movie
          </div>
          <div className="flex flex-row grid grid-cols-6 w-5/6 mx-auto py-2 px-12 line-thorugh max1200:grid-cols-4 max800:grid-cols-3 max800:px-5 max700:px-1 max570:px-6 max450:grid-cols-2 max450:px-1 ">
            {recommendList()}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Detail;
