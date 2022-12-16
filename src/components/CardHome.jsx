import { Link } from "react-router-dom";
import { themeState } from "../components/Navbar";
import { useAtom } from "jotai";

function CardHome({ width, height, id, title, demo, image, synopsis, director, releaseDate, type, }) {
  const [darkMode, setDarkMode] = useAtom(themeState);
  const parsingData = { id: id, title: title, image: image, demo: demo,  synopsis:synopsis, director:director, releaseDate:releaseDate, type:type  };

  return (
    <div className={`${darkMode ? "#405189" : "#808080"} p-2 rounded-md`}>
      <Link to={`/detail/${id}`} state={parsingData}>
        <img
          src={image}
          alt="img"
          className={` object-contain mb-2 mx-auto ${width} ${height}`}
        />
        <div className="text-left">
          <p className="text-darkgreen font-bold text-[12px] line-clamp-2 text-center">
            {title}
          </p>
          <p className="text-green text-xs"></p>
          <p className="text-darkgreen font-bold mt-2"></p>
        </div>
      </Link>
    </div>
  );
}

export default CardHome;
