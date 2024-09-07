import React, { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { FileInput, Input, InputTextarea } from "../components/input";
import { BookmarkIcon } from "../components/Icon";
import { useForm } from "react-hook-form";
import { Select } from "../components/select";
import { Textarea } from "../components/textarea";
import { Button } from "../components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoriesRequest } from "../sagas/categories/categoriesSlice";
import Section from "../layout/common/Section";
import BannerCommon from "../layout/common/BannerCommon";
import { getDate, getTimestamp } from "../hooks/useGetTime";
import { createPostsRequest } from "../sagas/posts/postsSlice";
import PageWrap from "../layout/common/PageWrap";
import LoadingRequest from "../layout/loading/LoadingRequest";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import useSetTitle from "../hooks/useSetTitle";
const schemaValidate = Yup.object({
  title: Yup.string().required("Vui lòng nhập tiêu đề!"),
  category: Yup.string().required("Vui lòng chọn chủ đề!"),
  content: Yup.string().required("Vui lòng nhập nội dung!"),
  image: Yup.mixed().required("Vui lòng nhập ảnh!"),
  // .min(6, 'Tên đăng nhập phải lớn hơn 6 kí tự'),
});

const AddNewPosts = () => {
  useSetTitle("Giỏ hàng");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { socket, isUploadImage } = useSelector((state) => state.global);
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    control,
    reset,
  } = useForm({ resolver: yupResolver(schemaValidate), mode: "onChange" });
  const { categories, loading } = useSelector((state) => state.categories);
  const { loading: loadingPost } = useSelector((state) => state.posts);
  const handleSendNotification = async () => {
    await socket.emit("notificationAdmin");
  };
  const handleSubmits = (value) => {
    const date = getDate();
    const timestamps = getTimestamp();
    const post = {
      ...value,
      date,
      timestamps,
    };
    if (isValid) {
      dispatch(createPostsRequest({ post, reset, handleSendNotification }));
    }
  };

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [token]);
  return (
    <>
      <LoadingRequest show={loading}></LoadingRequest>
      <LoadingRequest show={loadingPost}></LoadingRequest>
      <Section className="mb-1">
        <BannerCommon
          image={"./src/assets/image/bg-add-post.jpg"}
          title={"Quản Lý Giỏ hàng"}
        />
      </Section>
      <div>
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 bg-theme-blue ">
          <div class="min-h-[200px] relative z-50 h-full max-w-6xl mx-auto flex justify-center items-center text-center text-white p-6">
            <h2 class="sm:text-4xl text-2xl font-bold">Giỏ hàng của bạn</h2>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <div class=" container mx-auto min-h-screen text-black text-center">
          <div class="grid grid-cols-8">
            <h1 className="bg-gray-500 outline outline-1">ID</h1>
            <h1 className="bg-gray-500 col-span-4 outline outline-1">
              Sản phẩm
            </h1>
            <h1 className="bg-gray-500 col-span-3 outline outline-1">
              Số lượng
            </h1>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 bg-theme-blue ">
          <div class="min-h-[200px] relative z-50 h-full max-w-6xl mx-auto flex justify-center items-center text-center text-white p-6">
            <h2 class="sm:text-4xl text-2xl font-bold">Đơn hàng của bạn</h2>
          </div>
        </div>
      </div>
      <div class="mb-20">
        <div class=" container mx-auto min-h-screen text-black text-center">
          <div class="grid grid-cols-8">
            <h1 className="bg-gray-500 outline outline-1">ID</h1>
            <h1 className="bg-gray-500 col-span-4 outline outline-1">
              Sản phẩm
            </h1>
            <h1 className="bg-gray-500 col-span-1 outline outline-1">
              Số lượng
            </h1>
            <h1 className="bg-gray-500 col-span-2 outline outline-1">
              Địa chỉ
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPosts;
