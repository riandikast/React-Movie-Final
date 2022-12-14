import { Link } from "react-router-dom";
import { themeState } from "../components/Navbar";
import { useAtom } from "jotai";

function CardHome({
    id,
    title,
    demo,
    image,
  }) {
      const [darkMode, setDarkMode] = useAtom(themeState);
    return (
        <div  className={`${darkMode ? "#405189" : "#808080"} p-3 rounded-md`}>
            <Link to={`/detail/${id}`}>
                <img src={image} alt="img" className="h-32 object-contain mb-5 mx-auto w-32" />
                <div className="text-left">
                    <p className="text-darkgreen font-bold text-[12px] line-clamp-1 text-center">{title}</p>
                    <p className="text-green text-xs"></p>
                    <p className="text-darkgreen font-bold mt-2"></p>
                </div>
            </Link>
        </div>
    )
}

export default CardHome;