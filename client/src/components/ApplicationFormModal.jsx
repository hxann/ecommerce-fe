import React, { useState } from "react";

const ApplicationFormModal = ({ show, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cv: null,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.fullName) errors.fullName = "Họ và Tên là bắt buộc";
    if (!formData.email) errors.email = "Email là bắt buộc";
    if (!formData.phone) errors.phone = "Số điện thoại là bắt buộc";
    if (!formData.address) errors.address = "Địa chỉ là bắt buộc";
    if (!formData.city) errors.city = "Thành phố/Quận/Huyện là bắt buộc";
    if (!formData.cv) errors.cv = "CV là bắt buộc";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {!submitted ? (
        <div className="bg-white p-8 rounded-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Đơn Ứng Tuyển</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Họ và Tên</label>
              <input
                type="text"
                name="fullName"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phone"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Địa chỉ</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Thành phố/Quận/Huyện
              </label>
              <input
                type="text"
                name="city"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Mã bưu chính
              </label>
              <input
                type="text"
                name="postalCode"
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm">{errors.postalCode}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">CV của bạn</label>
              <input
                type="file"
                name="cv"
                className="w-full p-2 border rounded"
                onChange={handleFileChange}
              />
              {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Nộp đơn
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg max-w-lg w-full flex flex-col items-center">
          <div className="bg-green-100 text-green-600 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Bạn đã nộp đơn thành công</h2>
          <button
            onClick={onClose}
            className="bg-yellow-500 text-white py-2 px-4 rounded mt-4"
          >
            Trở về
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplicationFormModal;
