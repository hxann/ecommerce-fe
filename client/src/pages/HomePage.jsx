import React, { useEffect } from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Section from "../layout/common/Section";
import { Heading } from "../components/heading";
import ListSlide from "../layout/slide/ListSlide";
import ListPostHome from "../layout/posts/ListPostHome";
import ListPost from "../layout/posts/ListPost";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../layout/Banner";
import LoadingRequest from "../layout/loading/LoadingRequest";
import { postsRequest } from "../sagas/posts/postsSlice";
import { Link } from "react-router-dom";
import useSetTitle from "../hooks/useSetTitle";

const products = [
  {
    id: 1,
    name: "Garden Insect Spray",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/1.jpg",
  },
  {
    id: 2,
    name: "Bioneem",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/2.jpg",
  },
  {
    id: 3,
    name: "Garden Insect Spray",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/1.jpg",
  },
  {
    id: 4,
    name: "Bioneem",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/2.jpg",
  },
  {
    id: 5,
    name: "Garden Insect Spray",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/1.jpg",
  },
  {
    id: 6,
    name: "Bioneem",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/2.jpg",
  },
];

const HomePage = () => {
  // Gửi dữ liệu đến server
  useSetTitle("Sản phẩm");
  const { posts, loading } = useSelector((state) => state.posts);
  const { categories } = useSelector((state) => state.categories);
  const { customers } = useSelector((state) => state.customers);
  const post = [...posts];
  post.sort((a, b) => a.timestamps - b.timestamps);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const tokenLocal = localStorage.getItem("authToken");
  useEffect(() => {
    dispatch(postsRequest());
  }, [token, dispatch, tokenLocal]);

  const [quantity, setQuantity] = useState(Array(products.length).fill(1));

  const handleIncrease = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index] += 1;
    setQuantity(newQuantity);
  };

  const handleDecrease = (index) => {
    const newQuantity = [...quantity];
    if (newQuantity[index] > 1) newQuantity[index] -= 1;
    setQuantity(newQuantity);
  };

  return (
    <div>
      <LoadingRequest show={loading}></LoadingRequest>
      <Section className="mb-10">
        <Banner></Banner>
        <Heading isHeading className="mb-10 text-center">
          <div className="w-full h-20 bg-theme-blue pt-6 text-white">
            {" "}
            Sản Phẩm{" "}
          </div>
        </Heading>
      </Section>
      <div className="min-h-screen bg-theme-blue p-4 mb-10 rounded-lg">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full bg-gray-200 text-black focus:outline-none"
            />
            <span className="absolute right-3 top-2">
              <FiSearch className="text-black" />
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-[#0076b636] p-4 rounded-lg shadow-md"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="text-white text-center mb-2 text-lg font-bold">
                {product.name}
              </div>
              <div className="text-white text-center mb-4 text-lg">
                {product.price}
              </div>
              <div className="flex items-center justify-center mb-4">
                <button
                  onClick={() => handleDecrease(index)}
                  className="bg-white text-black px-2 py-1 rounded-l-md"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity[index]}
                  readOnly
                  className="w-10 text-center text-black h-8"
                />
                <button
                  onClick={() => handleIncrease(index)}
                  className="bg-white text-black px-2 py-1 rounded-r-md"
                >
                  +
                </button>
              </div>
              <button className="bg-white text-black w-full py-2 rounded-md mb-2">
                Thêm vào giỏ
              </button>
              <button className="bg-white text-black w-full py-2 rounded-md">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
