/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

function Banner({ id, title, demo, image, synopsis, director, releaseDate, type, banner}) {
  const parsingData = { id: id, title: title, image: image, demo: demo, synopsis:synopsis, director:director, releaseDate:releaseDate, type:type };
  return (
    <Link to={`/detail/${id}`} state={parsingData}>
      <img
        width="90%"
        src={banner}
        className=" mx-auto h-72 object-cover "
      />
      <div className="text-2xl font-semibold ml-12 mt-2">{title}</div>
    </Link>
  );
}

export default Banner;
