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
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Garden Insect Spray",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/1.png",
  },
  {
    id: 2,
    name: "Bioneem",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/2.png",
  },
  {
    id: 3,
    name: "Garden Insect Spray",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/1.png",
  },
  {
    id: 4,
    name: "Bioneem",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/2.png",
  },
  {
    id: 5,
    name: "Garden Insect Spray",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/1.png",
  },
  {
    id: 6,
    name: "Bioneem",
    price: "398.000 VND",
    imageUrl: "./src/assets/image/2.png",
  },
];

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

<<<<<<< HEAD
=======
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  ); // Retrieve cart from localStorage

  const navigate = useNavigate(); // For redirecting to the cart page

  const [searchTerm, setSearchTerm] = useState("");
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

>>>>>>> main
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

<<<<<<< HEAD
=======
  // Add product to cart and redirect to cart page
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item already exists, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the item doesn't exist, add it to the cart
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Open the modal with the product details
  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Set the selected product details
    setIsModalOpen(true); // Open the modal
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
>>>>>>> main
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
<<<<<<< HEAD
      <div className="min-h-screen bg-theme-blue p-4 mb-10 rounded-lg">
=======
      <div className="min-h-screen bg-theme-blue p-4">
>>>>>>> main
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
<<<<<<< HEAD
=======
              value={searchTerm}
              onChange={handleSearchChange}
>>>>>>> main
              className="w-full py-2 px-4 rounded-full bg-gray-200 text-black focus:outline-none"
            />
            <span className="absolute right-3 top-2">
              <FiSearch className="text-black" />
            </span>
          </div>
        </div>

        {/* Product Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-[#0076b636] p-4 rounded-lg shadow-md"
            >
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="bg-[#0076b636] p-4  shadow-md">
>>>>>>> main
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
<<<<<<< HEAD
                  className="bg-white text-black px-2 py-1 rounded-l-md"
=======
                  className="bg-white text-bleck px-2 py-1 rounded-l-md"
>>>>>>> main
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity[index]}
                  readOnly
<<<<<<< HEAD
                  className="w-10 text-center text-black h-8"
=======
                  className="w-15 text-center h-8 text-black"
>>>>>>> main
                />
                <button
                  onClick={() => handleIncrease(index)}
                  className="bg-white text-black px-2 py-1 rounded-r-md"
                >
                  +
                </button>
              </div>
<<<<<<< HEAD
              <button className="bg-white text-black w-full py-2 rounded-md mb-2">
                Thêm vào giỏ
              </button>
              <button className="bg-white text-black w-full py-2 rounded-md">
=======
              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/add-post"); // Navigate to the cart page
                }}
                className="bg-white text-black w-full py-2 rounded-md mb-2"
              >
                Thêm vào giỏ hàng
              </button>

              <button
                className="bg-white text-black w-full py-2 rounded-md"
                onClick={() => handleViewDetails(product)} // Open modal on click
              >
>>>>>>> main
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
<<<<<<< HEAD
=======

        {/* Modal (Popup Window) */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProduct.name}
              </h2>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-40 object-contain mb-4"
              />
              <p className="mb-4">{selectedProduct.description}</p>
              <p className="mb-4 text-lg font-semibold">
                {selectedProduct.price}
              </p>
              <button
                className="bg-theme-blue text-white px-4 py-2 rounded-md w-full"
                onClick={handleCloseModal} // Close modal on click
              >
                Đóng
              </button>
            </div>
          </div>
        )}
>>>>>>> main
      </div>
    </div>
  );
};

export default HomePage;
