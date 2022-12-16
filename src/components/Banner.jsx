/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

function Banner({ id, title, demo, image, synopsis, director, releaseDate, type, banner}) {
  const parsingData = { id: id, title: title, image: image, demo: demo, synopsis:synopsis, director:director, releaseDate:releaseDate, type:type };
  return (
    <Link to={`/detail/${id}`} state={parsingData} className='justify-center flex flex-col '>
      <img
      
        src={banner}
        className=" mx-auto h-[15rem] w-[45rem] object-cover max1200:w-[36rem]  max1200:h-[12rem]  max1000:w-[27rem]  max1000:h-[9rem] max800:w-[24rem] max800:h-[8rem] max700:w-[19.5rem] max700:h-[6.5rem]  max570:w-[15rem] max570:h-[5rem] "
      />
      <div className="text-2xl  max1000:text-xl font-semibold ml-16 mt-2 max1200:ml-20 max700:text-base max700:ml-12 max570:text-xs max450:text-[11px] max450:ml-2">{title}</div>
    </Link>
  );
}

export default Banner;
