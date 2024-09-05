import React from "react";

import { NavLink } from "react-router-dom";
import Overlay from "./common/Overlay";
import { Heading } from "../components/heading";
import { useDispatch, useSelector } from "react-redux";
import { closeNavbar } from "../sagas/global/globalSlice";

export const listLink = [
  {
    id: 1,
    title: "Giới thiệu",
    to: "/about",
  },
  {
    id: 2,
    title: "Sản phẩm",
    to: "/",
  },
  {
    id: 3,
    title: "Liên hệ",
    to: "/contact",
  },
  {
    id: 4,
    title: "Tuyển dụng",
    to: "/categories",
  },
  {
    id: 5,
    title: "Tin tức",
    to: "/posts",
  },
];

const Navbar = () => {
  const { showNavbar } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeNavbar());
  };
  return (
    <>
      <Overlay show={showNavbar} onClick={handleClose}></Overlay>
      <div
        className={`flex-1 absolute  bg-white-cream flex top-full w-full justify-center gap-5 transition-all
                flex-col px-5 py-5 text-sm z-[10] shadow-soft border-t border-primary
                ${showNavbar ? "left-0" : "-left-full"}
                 lg:static lg:flex-row lg:p-0 lg:bg-transparent lg:flex lg:gap-10
                lg:shadow-transparent lg:border-0`}
      >
        {listLink.map(({ to, title, id }) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            key={id}
            to={to}
          >
            <Heading isHeading className="text-base font-medium z-[9]">
              {title}
            </Heading>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
