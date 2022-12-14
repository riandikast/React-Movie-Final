/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

function Banner({ id, title, demo, image }) {
  return (
    <Link to={`/detail/${id}`}>
      <img
        width="90%"
        height="10px"
        src={image}
        className=" mx-auto h-60 "
      />
      <div className="text-2xl font-semibold ml-12 mt-2">{title}</div>
    </Link>
  );
}

export default Banner;
