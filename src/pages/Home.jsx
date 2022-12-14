/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { themeState } from "../components/Navbar";
import Carousel from "better-react-carousel";
import { getMovie, getBanner } from "../feature/ApiService";
import CardHome from "../components/CardHome";
import Banner from "../components/Banner";

function Home() {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState([]);

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
    const movieList = await getMovie();
    const banner = await getBanner();
    setData(movieList);
    setBanner(banner);
    console.log("a", banner);
  };

  const listProduct = () => {
    return data?.map((item) => (
      <CardHome id={item.id} title={item.title} image={item.image} />
    ));
  };

  const listBanner = () => {
    return (
      <>
        <Carousel
          cols={1}
          rows={1}
          gap={10}
          loop={true}
          dotColorInactive={darkMode ? "#405189" : "#a8a8a8"}
          dotColorActive={darkMode ? "#f8fafc" : "#405189"}
          mobileBreakpoint={100}
          showDots={true}
          autoplay={4000}
          scrollSnap={true}
        >
          {banner?.map((item) => {
            return (
              <Carousel.Item>
                <Banner id={item.id} title={item.title} image={item.banner} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  };

  useEffect(() => {
    fetchApiCall();
  }, []);

  return (
    <>
      <div
        className={`w-full h-screens ${
          darkMode ? "bg-[#192026] text-white" : "bg-[#ffffff] text-black"
        }`}
      >
        <div className="ml-40 text-xl font-semibold py-3">New Movie</div>
        <div className="flex flex-col w-5/6 mx-auto  justify-center">
        {listBanner()}
        </div>
        <div className="">
          <div className="text-xl font-semibold ml-28 mt-28 mb-4">
            Popular Movie
          </div>
          <div className="flex flex-row mx-auto  w-5/6">{listProduct()}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
