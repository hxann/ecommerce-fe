import React, { useEffect, useState } from "react";
import ListCategory from "../layout/categories/ListCategory";
import { useDispatch, useSelector } from "react-redux";
import Section from "../layout/common/Section";
import BannerCommon from "../layout/common/BannerCommon";
import LoadingRequest from "../layout/loading/LoadingRequest";
import { categoriesRequest } from "../sagas/categories/categoriesSlice";
import useSetTitle from "../hooks/useSetTitle";
import JobModal from "../components/JobModal"; // Import JobModal

const CategoryPage = () => {
  useSetTitle("Trang tuyển dụng");
  const { categories, loading } = useSelector((state) => state.categories);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [token]);

  const jobs = [
    {
      title: "Seller",
      titleVietnamese: "Nhân viên bán hàng",
      postedDate: "2 ngày trước",
      location: "TP.HCM",
      type: "Full time",
    },
    {
      title: "Manager",
      titleVietnamese: "Quản lý",
      postedDate: "1 ngày trước",
      location: "TP.HCM",
      type: "Full time",
    },
    {
      title: "Janitor",
      titleVietnamese: "Nhân viên vệ sinh",
      postedDate: "Hôm nay",
      location: "TP.HCM",
      type: "Full time",
    },
  ];

  return (
    <>
      <LoadingRequest show={loading}></LoadingRequest>
      <Section className="mb-10">
        <BannerCommon
          image={"./src/assets/image/hiring.jpg"}
          title={"Tuyển Dụng"}
        />
      </Section>

      <div className="py-5">
        <div className="grid h-full grid-cols-2 grid-rows-2 px-5 gap-5">
          <div className="bg-theme-blue rounded-lg flex justify-center items-center">
            <h1 class=" text-white font-bold text-7xl mx-5 text-center">
              Chọn một công việc bạn yêu thích và kiến tạo tương lai theo ý bạn
            </h1>
          </div>
          <div className="flex items-center flex-1 w-full h-full col-span-2 p-8 lg:col-span-1">
            <div>
              <h5 className="relative inline-block pr-4 text-3xl font-extrabold text-primary font-dancing">
                Về TSVN
                <span className="absolute left-full border w-[100px] top-1/2 -translate-y-1/2 h-[1px] border-primary"></span>
              </h5>
              <h1 className="mb-5 text-6xl font-bold ">
                Đến với <span className="text-primary">||</span> Trừ Sâu VN
              </h1>
              <p className="mb-4 text-xl">
                Tại TSVN, chúng tôi tạo khác biệt bằng một thương hiệu đột phá.
                Chúng tôi tin rằng từng cá nhân sẽ trở nên xuất sắc hơn khi phát
                huy được sức mạnh của tập thể. Tư duy đột phá sẽ giúp chúng tôi
                trở thành người mở lối.
              </p>

              <div class="mt-10"></div>
            </div>
          </div>
          <div className="flex items-center flex-1 w-full h-full col-span-2 p-8 lg:col-span-1">
            <div>
              <h5 className="relative inline-block pr-4 text-3xl font-extrabold text-primary font-dancing">
                Phát triển sự nghiệp cùng chúng tôi
                <span className="absolute left-full border w-[100px] top-1/2 -translate-y-1/2 h-[1px] border-primary"></span>
              </h5>
              <p className="mb-4 text-xl">
                Sự phát triển của bạn là ưu tiên hàng đầu. Chúng tôi cung cấp
                môi trường hỗ trợ, cơ hội đào tạo liên tục và lộ trình thăng
                tiến rõ ràng để bạn có thể phát triển sự nghiệp và đạt được mục
                tiêu cá nhân. Hãy gia nhập chúng tôi và cùng xây dựng con đường
                thành công của bạn!
              </p>
              <div class="mt-5">
                {/* Nút "JOIN US NOW" */}
                <button
                  className="bg-theme-blue text-white font-bold py-2 px-4 rounded hover:bg-primary transition text-4xl"
                  onClick={() => setShowModal(true)}
                >
                  JOIN US NOW
                </button>
              </div>
            </div>
          </div>
          <img
            class="rounded-lg"
            src="../src/assets/image/wp2.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Component Modal */}
      <JobModal
        show={showModal}
        onClose={() => setShowModal(false)}
        jobs={jobs}
      />
    </>
  );
};

export default CategoryPage;
