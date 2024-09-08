import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoriesRequest } from "../sagas/categories/categoriesSlice";
import LoadingRequest from "../layout/loading/LoadingRequest";
import Section from "../layout/common/Section";
import BannerCommon from "../layout/common/BannerCommon";
import useSetTitle from "../hooks/useSetTitle";
import { getDate } from "../hooks/useGetTime";
import "./Modal.css";

// Validation Schema
const schemaValidate = Yup.object({
  title: Yup.string().required("Vui lòng nhập tiêu đề!"),
  category: Yup.string().required("Vui lòng chọn chủ đề!"),
  content: Yup.string().required("Vui lòng nhập nội dung!"),
  image: Yup.mixed().required("Vui lòng nhập ảnh!"),
});

const AddNewPosts = () => {
  useSetTitle("Giỏ hàng");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { categories, loading } = useSelector((state) => state.categories);
  const { loading: loadingPost } = useSelector((state) => state.posts);

  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidate),
    mode: "onChange",
  });

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [token]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const totalPrice = cart.reduce((total, item) => {
    const numericPrice = parseInt(item.price.replace(/\D/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  const updateQuantity = (productId, action) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease") {
            if (item.quantity === 1) {
              if (
                window.confirm(
                  "Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng không?"
                )
              ) {
                return null;
              } else {
                return item;
              }
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = () => {
    if (!userInfo.name || !userInfo.phone || !userInfo.address) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const confirmationMessage = `
      Tên: ${userInfo.name}\n
      Số điện thoại: ${userInfo.phone}\n
      Địa chỉ: ${userInfo.address}\n
      Tổng giá: ${totalPrice.toLocaleString("vi-VN")} VND\n\n
      Bạn có chắc chắn muốn xác nhận đơn hàng không?`;

    if (window.confirm(confirmationMessage)) {
      // Proceed with order submission
      const newOrder = {
        id: Date.now(), // Unique ID
        products: cart,
        address: userInfo.address,
        name: userInfo.name,
        phone: userInfo.phone,
        totalPrice: totalPrice,
        date: getDate(),
      };

      setOrders((prevOrders) => {
        const updatedOrders = [...prevOrders, newOrder];
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        return updatedOrders;
      });

      console.log("Order Submitted:", newOrder); // For debugging
      setCart([]);
      localStorage.removeItem("cart");
      setUserInfo({
        name: "",
        phone: "",
        address: "",
      });
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <LoadingRequest show={loading} />
      <LoadingRequest show={loadingPost} />
      <Section className="mb-1">
        <BannerCommon
<<<<<<< HEAD
          image={"./src/assets/image/cart.jpg"}
=======
          image={"./src/assets/image/bg-add-post.jpg"}
>>>>>>> 10a5be96c8023d68ba92e6bd956ac82b49f241ae
          title={"Quản Lý Giỏ hàng"}
        />
      </Section>
      <div>
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 bg-theme-blue">
          <div className="min-h-[200px] relative z-50 h-full max-w-6xl mx-auto flex justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold">Giỏ hàng của bạn</h2>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="container mx-auto min-h-screen text-black text-center">
          <div className="grid grid-cols-12 mb-4">
            <h1 className="bg-gray-500 outline outline-1 col-span-1">ID</h1>
            <h1 className="bg-gray-500 outline outline-1 col-span-5">
              Sản phẩm
            </h1>
            <h1 className="bg-gray-500 outline outline-1 col-span-3">
              Số lượng
            </h1>
            <h1 className="bg-gray-500 outline outline-1 col-span-3">
              Giá tiền
            </h1>
          </div>
          {cart.length === 0 ? (
            <p>Giỏ hàng của bạn đang trống.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-2 mb-2">
                <div className="outline outline-1 col-span-1">{item.id}</div>
                <div className="outline outline-1 col-span-5">{item.name}</div>
                <div className="outline outline-1 col-span-3 flex justify-center items-center">
                  <button
                    className="bg-gray-300 px-2"
                    onClick={() => updateQuantity(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray-300 px-2"
                    onClick={() => updateQuantity(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
                <div className="outline outline-1 col-span-3">{item.price}</div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="text-right font-bold text-xl mt-4 mr-5">
        Tổng giá: {totalPrice.toLocaleString("vi-VN")} VND
      </div>
      <div className="text-right mt-4 mr-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Đặt hàng
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Đặt hàng"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-center text-lg font-bold mb-4">
          Thông tin đặt hàng
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Tên:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Địa chỉ:</label>
            <textarea
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleOrderSubmit}
            >
              Hoàn thành
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Hủy
            </button>
          </div>
        </form>
      </Modal>
      <div className="mt-10">
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 bg-theme-blue">
          <div className="min-h-[200px] relative z-50 h-full max-w-6xl mx-auto flex justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold">Đơn hàng của bạn</h2>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="container mx-auto min-h-screen text-black text-center">
          <div className="grid grid-cols-8">
            <h1 className="bg-gray-500 col-span-1 outline outline-1">ID</h1>
            <h1 className="bg-gray-500 col-span-1 outline outline-1">
              Sản phẩm
            </h1>
            <h1 className="bg-gray-500 col-span-1 outline outline-1">
              Số lượng
            </h1>
            <h1 className="bg-gray-500 col-span-2 outline outline-1">Họ tên</h1>
            <h1 className="bg-gray-500 col-span-1 outline outline-1">SĐT</h1>
            <h1 className="bg-gray-500 col-span-2 outline outline-1">
              Địa chỉ
            </h1>
          </div>
          {orders.length === 0 ? (
            <p>Chưa có đơn hàng nào.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="grid grid-cols-8 mb-2">
                <div className="outline outline-1">{order.id}</div>
                <div className="outline outline-1 col-span-1">
                  {order.products.map((product, index) => (
                    <div key={index}>
                      {product.name} x {product.quantity}
                    </div>
                  ))}
                </div>
                <div className="outline outline-1 col-span-1">
                  {order.products.reduce(
                    (sum, product) => sum + product.quantity,
                    0
                  )}
                </div>
                <div className="outline outline-1 col-span-2">{order.name}</div>
                <div className="outline outline-1 col-span-1">
                  {order.phone}
                </div>
                <div className="outline outline-1 col-span-2">
                  {order.address}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AddNewPosts;
