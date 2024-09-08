/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../components/Icon";
import BannerCommon from "../layout/common/BannerCommon";
import useSetTitle from "../hooks/useSetTitle";
const teamMembers = [
  {
    id: 1,
    img: "",
    name: "",
    position: "",
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
];
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
                Nhà cung cấp hàng đầu các sản phẩm thuốc trừ sâu và diêm tro tại
                Việt Nam. Chúng tôi tự hào mang đến cho khách hàng những giải
                pháp tối ưu để bảo vệ cây trồng và nâng cao hiệu quả sản xuất
                nông nghiệp.
              </p>
              <p className="mb-4 text-base">
                Với sự kết hợp giữa công nghệ tiên tiến và kinh nghiệm dày dạn,
                chúng tôi cung cấp đa dạng các loại thuốc trừ sâu và diêm tiêu
                chất lượng cao, được lựa chọn kỹ lưỡng để đáp ứng nhu cầu của
                từng loại cây trồng và điều kiện cụ thể. Các sản phẩm của chúng
                tôi không chỉ giúp kiểm soát sâu bệnh hiệu quả mà còn đảm bảo sự
                an toàn cho môi trường và sức khỏe cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-primary min-h-[2px]"></div>
      <div class="py-2">
        <div class="grid h-full grid-cols-5 px-5 gap-x-5 gap-y-2">
          <div class="group inline-grid grid-rows-2 rounded-lg justify-center items-center">
            <h1 class="bg-theme-blue rounded-lg text-white font-bold text-base mx-5 text-center p-3">
              Chất lượng sản phẩm
            </h1>
            <div class="invisible group-hover:visible flex justify-center items-center">
              <h1 class="text-black font-bold text-xs mx-5 text-center bg-primary rounded-lg p-3">
                Cung cấp các sản phẩm thuốc trừ sâu và diêm tiêu đạt tiêu chuẩn
                chất lượng cao nhất. Mỗi sản phẩm đều được kiểm tra nghiêm ngặt
                và chứng nhận chất lượng trước khi đưa đến tay khách hàng, nhằm
                đảm bảo hiệu quả tối ưu.
              </h1>
            </div>
          </div>

          <div class="group inline-grid grid-rows-2 rounded-lg justify-center items-center">
            <h1 class="bg-theme-blue rounded-lg text-white font-bold text-base mx-5 text-center p-3">
              Dịch vụ khách hàng tận tâm
            </h1>
            <div class="invisible group-hover:visible flex justify-center items-center">
              <h1 class="text-black font-bold text-xs mx-5 text-center bg-primary rounded-lg p-3">
                Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn
                tận tình, giúp khách hàng lựa chọn sản phẩm phù hợp và giải
                quyết mọi vấn đề phát sinh. Dịch vụ hậu mãi của chúng tôi đảm
                bảo sự hài lòng và tin tưởng của khách hàng.
              </h1>
            </div>
          </div>

          <div class="group inline-grid grid-rows-2 rounded-lg justify-center items-center">
            <h1 class="bg-theme-blue rounded-lg text-white font-bold text-base mx-5 text-center p-3">
              Đổi mới và cải tiến
            </h1>
            <div class="invisible group-hover:visible flex justify-center items-center">
              <h1 class="text-black font-bold text-xs mx-5 text-center bg-primary rounded-lg p-3">
                Không ngừng nghiên cứu và áp dụng các công nghệ tiên tiến nhất,
                để cải tiến sản phẩm và quy trình sản xuất. Sự đổi mới liên tục
                giúp chúng tôi đáp ứng tốt hơn nhu cầu của thị trường và nâng
                cao chất lượng dịch vụ.
              </h1>
            </div>
          </div>

          <div class="group inline-grid grid-rows-2 rounded-lg justify-center items-center">
            <h1 class="bg-theme-blue rounded-lg text-white font-bold text-base mx-5 text-center p-3">
              Bảo vệ môi trường
            </h1>
            <div class="invisible group-hover:visible flex justify-center items-center">
              <h1 class="text-black font-bold text-xs mx-5 text-center bg-primary rounded-lg p-3">
                Chúng tôi cam kết thực hiện các biện pháp bảo vệ môi trường
                trong toàn bộ quy trình sản xuất và phân phối. Các sản phẩm của
                chúng tôi được thiết kế để giảm thiểu tác động tiêu cực đến hệ
                sinh thái và sức khỏe cộng đồng.
              </h1>
            </div>
          </div>

          <div class="group inline-grid grid-rows-2 rounded-lg justify-center items-center">
            <h1 class="bg-theme-blue rounded-lg text-white font-bold text-base mx-5 text-center p-3">
              Minh bạch
            </h1>
            <div class="invisible group-hover:visible flex justify-center items-center mb-5">
              <h1 class="text-black font-bold text-xs mx-5 text-center bg-primary rounded-lg p-3">
                Nguyên tắc minh bạch, trung thực và công bằng trong tất cả các
                giao dịch. Đảm bảo các hoạt động kinh doanh của chúng tôi đều
                tuân thủ các quy định pháp luật và tiêu chuẩn đạo đức cao nhất.
              </h1>
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
    </div>
  );
};

export default AboutPage;
