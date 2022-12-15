/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { themeState } from "../components/Navbar";
import Carousel from "better-react-carousel";
import { getMovie, getBanner, getRecommended } from "../feature/ApiService";
import CardHome from "../components/CardHome";
import Banner from "../components/Banner";
import { filterCountryByName } from "../feature/searchMovie";

function Home() {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState([]);
  const [allMovie, setAllMovie] = useState([]);
  const [recommended, setRecommended] = useState([]);


  const queryParams = new URLSearchParams(window.location.search);
  let search = queryParams.get("search");

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
    const bannerList = await getBanner();
    const recommendedList = await getRecommended();
    setData(movieList);
    setBanner(bannerList);
    setRecommended(recommendedList);
    setAllMovie([...movieList, ...bannerList, ...recommendedList]);
    console.log("a", allMovie);
  };

  const listProduct = () => {
    if (search == null) {
      return data?.map((item) => (
        <CardHome id={item.id} title={item.title} image={item.image} />
      ));
    } else {
      let allMovieTemp = allMovie
        .filter((item) => {
          if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
      
        .map((item) => {
          return (
            <CardHome id={item.id} title={item.title} image={item.image} />
          );
        });
        let uniqueObjArray = [
          ...new Map(allMovieTemp.map((item) => [item["title"], item])).values(),
          
        ];
        return uniqueObjArray

    }
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

  const saveLastTheme =()=> {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }

  const restoreLastTheme = ()=> {
    const theme = localStorage.getItem("theme", JSON.stringify(darkMode));
    setDarkMode(theme)
  }

  useEffect(() => {
    fetchApiCall();
    restoreLastTheme()
  }, []);

  useEffect(() => {
    saveLastTheme()
  }, [darkMode]);

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
