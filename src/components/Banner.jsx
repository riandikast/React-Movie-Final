/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

function Banner({ id, title, demo, image, synopsis, director, releaseDate, type, banner}) {
  const parsingData = { id: id, title: title, image: image, demo: demo, synopsis:synopsis, director:director, releaseDate:releaseDate, type:type };
  return (
    <Link to={`/detail/${id}`} state={parsingData}>
      <img
        width="88%"
        src={banner}
        className=" mx-auto h-60  object-cover "
      />
      <div className="text-xl sm:text-2xl font-semibold ml-16 mt-2">{title}</div>
    </Link>
  );
}

export default Banner;
