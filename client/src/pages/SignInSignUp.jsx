import React, { useEffect } from "react";
import "../style.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleSignin } from "../sagas/global/globalSlice";
import { icon } from "../ADMIN/routes";
import useSetTitle from "../hooks/useSetTitle";
import { saveObjectToLocalStorage } from "../utils/localstorage";
import { getInfoAuth, setInfoAuth } from "../sagas/auth/authSlice";
import useCheckAuth from "../hooks/useCheckAuth";
const SignInSignUp = () => {
  useSetTitle("Đăng nhập/Đăng ký");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { showSignin } = useSelector((state) => state.global);
  const navigate = useNavigate();
  const handleToggleSignin = () => {
    dispatch(toggleSignin());
  };
  useEffect(() => {
    if (token) navigate("/about");
  }, [token]);
  useCheckAuth();
  return (
    <div
      className={`container-main ${
        showSignin ? "sign-up-mode" : ""
      } select-none`}
    >
      <Link
        to={"/about"}
        className="fixed top-2 right-5 flex justify-center items-center gap-5 text-white z-[10]"
      >
        Quay lại trang chủ <ArrowRightIcon {...icon} />
      </Link>

      <div className="forms-container">
        <div className="signin-signup">
          <SignIn onClick={handleToggleSignin}></SignIn>
          <SignUp onClick={handleToggleSignin}></SignUp>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content mx-auto">
            <h3>Bạn là người mới? </h3>
            <p>
              Đăng ký tài khoản để có trải nghiệm chất lượng với các sản phẩm
              của chúng tôi!
            </p>
            <div className="flex flex-col items-center justify-center gap-10 ">
              <button
                onClick={handleToggleSignin}
                className="btn transparent"
                id="sign-up-btn"
              >
                Đăng ký
              </button>
            </div>
          </div>
          <img src="./src/assets/logos.jpg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content mx-auto">
            <h3>Bạn đã có tài khoản trước đây ?</h3>
            <p>Đăng nhập để xem có sản phẩm có gì mới không nào.</p>
            <button
              onClick={handleToggleSignin}
              className="btn transparent"
              id="sign-in-btn"
            >
              Đăng nhập
            </button>
          </div>
          <img src="./src/assets/signup-nobg.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
