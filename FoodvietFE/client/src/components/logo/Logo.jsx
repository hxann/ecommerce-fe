import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/about"}>
      <span className="font-logo text-xl md:text-2xl lg:text-3xl text-primary">
        <img
          src="./src/assets/logos.jpg"
          className="h-20 w-20 rounded-full"
          alt=""
        />
      </span>
    </Link>
  );
};

export default Logo;
