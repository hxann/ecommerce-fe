/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../components/Icon";
import BannerCommon from "../layout/common/BannerCommon";
import useSetTitle from "../hooks/useSetTitle";
import Section from "../layout/common/Section";
{
  /*const teamMembers = [
  {
    id: 1,
    img: "",
    name: "",
    position: " ",
  },
  {
    id: 2,
    img: "",
    name: "",
    position: "",
  },
  {
    id: 3,
    img: "",
    name: "",
    position: "",
  },
  {
    id: 4,
    img: "",
    name: "",
    position: "",
  },
];*/
}
const AboutPage = () => {
  useSetTitle("Giới thiệu");
  return (
    <div className="bg-white ">
      <BannerCommon
        image={"../src/assets/image/tuoinuoc.jpg"}
        title="ABOUT US"
      />
      <div className="py-5">
        <div className="grid h-full grid-cols-2 px-5">
          <div className="flex-1 col-span-2 lg:col-span-1">
            <img
              src="../src/assets/image/about.jpg"
              alt=""
              className="w-full rounded-lg"
            />
          </div>

          <div className="flex items-center flex-1 w-full h-full col-span-2 p-8 lg:col-span-1">
            <div>
              <h5 className="relative inline-block pr-4 text-3xl font-extrabold text-primary font-dancing">
                Về TSVN
                <span className="absolute left-full border w-[100px] top-1/2 -translate-y-1/2 h-[1px] border-primary"></span>
              </h5>
              <h1 className="mb-5 text-4xl font-bold ">
                Chào mừng đến với <span className="text-primary">||</span> Trừ
                Sâu VN
              </h1>
              <p className="mb-4 text-base">
                Chào mừng các bạn đến với TSVN - nơi hội tụ những sản phẩm diệt
                sâu, diêm tro và phân bón chất lượng tại Việt Nam! Chúng tôi tự
                hào mang đến cho bạn những sản phẩm chất lượng để có thể trồng
                nên những sản phẩm nông sản xịn nhất của Việt Nam chúng ta.
              </p>
              <p className="mb-4 text-base">
                Tại đây, bạn sẽ được đắm chìm trong thế giới đa dạng của các món
                ngon, từ những món truyền thống đậm hương vị quê hương đến những
                sáng tạo mới lạ, mang đến cho bữa ăn của bạn những trải nghiệm
                thú vị và đặc sắc. Chúng tôi không chỉ chia sẻ về những công
                thức nấu ăn ngon mắt mà còn đưa bạn đến những địa điểm ẩm thực
                tuyệt vời, nơi bạn có thể thưởng thức những hương vị tinh tế.
                Bạn cũng có thể để lại những bài viết giới thiệu về ẩm thực trên
                đất nước Việt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <div className="bg-theme-blue inset-0"></div>
        <h5 className="relative inline-block mb-2 text-4xl font-bold text-white bg-theme-blue w-full h-24 pt-7">
          SẢN PHẨM NỔI BẬT
        </h5>
      </div>
      <div className="grid grid-cols-3 px-5 h-auto bg-theme-blue mx-2 rounded-lg mt-1 mb-5">
        <div className="bg-[#0076b636] rounded-lg my-5 col-span-2">
          <div>
            <h5 className="text-center mt-5 font-bold text-3xl text-primary">
              Bioneem
            </h5>
            <p className="mx-3 my-5 text-xl text-white font-bold">
              Bioneem là sản phẩm xịt tự nhiên chứa dầu neem, hiệu quả trong
              việc kiểm soát côn trùng gây hại như sâu bọ và rệp trên cây trồng.
              Với thành phần chiết xuất từ cây neem, Bioneem không chỉ diệt côn
              trùng mà còn bảo vệ cây trồng một cách an toàn và thân thiện với
              môi trường.
            </p>
            <p className="mx-3 my-5 text-xl text-white font-bold">
              Dễ sử dụng và lý tưởng cho các loại cây trong vườn, Bioneem giúp
              giữ cho khu vườn của bạn luôn khỏe mạnh và phát triển xanh tươi.
            </p>
          </div>
        </div>
        <div className="flex-1 col-span-2 lg:col-span-1 -mt-5 -ml-5">
          <img
            src="./src/assets/image/2.jpg"
            alt=""
            className="mx-auto h-72 w-72 mt-8 mb-3 rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 px-5 h-auto bg-theme-blue mx-2 rounded-lg mt-1 mb-5">
        <div className="bg-[#0076b636] rounded-lg my-5 col-span-2">
          <div>
            <h5 className="text-center mt-5 font-bold text-3xl text-primary">
              Garden Insect Spray
            </h5>
            <p className="mx-3 my-5 text-xl text-white font-bold">
              Garden Insect Spray là một sản phẩm bảo vệ cây trồng trong vườn,
              được thiết kế để tiêu diệt hoặc đuổi côn trùng gây hại như sâu bọ,
              rệp, và nhện. Sản phẩm này thường chứa các thành phần hóa học hoặc
              tự nhiên có tác dụng chống lại các loại côn trùng mà không làm hại
              cây trồng.
            </p>
            <p className="mx-3 my-5 text-xl text-white font-bold">
              Garden Insect Spray giúp bảo vệ sức khỏe của cây và nâng cao năng
              suất cây trồng bằng cách kiểm soát hiệu quả các loại dịch hại.
            </p>
          </div>
        </div>
        <div className="flex-1 col-span-2 lg:col-span-1 -mt-5 -ml-5">
          <img
            src="./src/assets/image/1.jpg"
            alt=""
            className="mx-auto h-72 w-72 mt-8 mb-3 rounded-lg"
          />
        </div>
      </div>
      {/*<div className="grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-4 gap-x-5 bg-theme-blue h-fit">
          {/*{teamMembers.map((item, index) => (
            <div
              key={item.id}
              className="hover:h-full h-[calc(100%-38px)] overflow-hidden bg-white rounded-lg shadow-sm transition-all duration-200 ease-in group"
            >
              <div className="flex flex-col items-center ">
                <div className="pt-12 pb-4 mx-auto overflow-hidden transition-all rounded-full">
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover w-full h-full transition-all rounded-full group-hover:scale-125 "
                  />
                </div>
                <h5 className="text-lg font-bold">{item.name}</h5>
                <small>{item.position}</small>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center justify-center mx-1 text-lg font-bold text-white cursor-pointer bg-theme-blue w-9 h-9 rounded-t-2xl">
                    <FacebookIcon></FacebookIcon>
                  </div>
                  <div className="flex items-center justify-center mx-1 text-lg font-bold text-white cursor-pointer bg-theme-blue w-9 h-9 rounded-t-2xl">
                    <InstagramIcon></InstagramIcon>
                  </div>
                  <div className="flex items-center justify-center mx-1 text-lg font-bold text-white cursor-pointer bg-theme-blue w-9 h-9 rounded-t-2xl">
                    <TwitterIcon></TwitterIcon>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>*/}
    </div>
  );
};

export default AboutPage;
