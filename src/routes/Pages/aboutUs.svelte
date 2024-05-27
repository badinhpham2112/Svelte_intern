<script>
  import aboutUs_banner from "../../lib/asset/aboutUs_banner.png";
  import img_introduce from "../../lib/asset/img_introduce.png";
  import img_introduce1 from "../../lib/asset/img_introduce1.png";
  import img_chart from "../../lib/asset/img_chart.png";
  import img_team from "../../lib/asset/img_team.png";
  import img_safe from "../../lib/asset/img_safe.png";
  import img_project from "../../lib/asset/img_project.png";
  import img_sign from "../../lib/asset/img_sign.png";
  import signature from "../../lib/asset/signature.png";
  import chairperson from "../../lib/asset/chairperson.png";
  import img_design from "../../lib/asset/img_design.png";
  import vision from "../../lib/asset/vision.png";
  import mission from "../../lib/asset/mission.png";
  import sign1 from "../../lib/asset/sign1.png";
  import img_vision from "../../lib/asset/img_vision.png";
  import target from "../../lib/asset/target.png";
  import leader from "../../lib/asset/leader.png";
  import leader1 from "../../lib/asset/leader1.png";
  import leader2 from "../../lib/asset/leader2.png";
  import leader3 from "../../lib/asset/leader3.png";
  import Carousel from "svelte-carousel";
  import prev from "../../lib/asset/prev.svg";
  import next from "../../lib/asset/next.png";
  import { onMount, onDestroy } from "svelte";
  import { writable, derived } from "svelte/store";
  import certificate from "../../lib/asset/certificate.png";
  import certificate1 from "../../lib/asset/certificate2.png";
  import "../../tailwindCSS.css";
  import certificate3 from "../../lib/asset/certificate3.png";
  import certificate4 from "../../lib/asset/certificate4.jpg";
  import certificate5 from "../../lib/asset/certificate5.jpg";
  import certificate6 from "../../lib/asset/certificate6.jpg";
  import client1 from "../../lib/asset/client1.png";
  import client2 from "../../lib/asset/client2.png";
  import client3 from "../../lib/asset/client3.png";
  import client4 from "../../lib/asset/client4.png";
  import client5 from "../../lib/asset/client5.png";
  import client6 from "../../lib/asset/client6.png";
  import client7 from "../../lib/asset/client1.png";
  import client8 from "../../lib/asset/client2.png";
  import client9 from "../../lib/asset/client3.png";
  import client10 from "../../lib/asset/client4.png";
  import client11 from "../../lib/asset/client5.png";
  import client12 from "../../lib/asset/client6.png";
  import prev_construction from "../../lib/asset/prev.svg";
  import next_construction from "../../lib/asset/next.png";
  import FooterComponent from "../../Components/FooterComponent.svelte";
  import ButtonScrollTop from "../../Components/ButtonScrollTop.svelte";
  import HeaderComponent from "../../Components/HeaderComponent.svelte";
  import prev_black from "../../lib/asset/prev_black.png";
  import next_black from "../../lib/asset/Next_black.png";

  const checkWindow = typeof window !== "undefined";
  const width = writable(checkWindow ? window.innerWidth : 0);
  const checkScreen = derived(width, ($width) => $width >= 1024);
  const checkScreenMB = derived(width, ($width) => $width < 1024);
  let carousel;
  let carousel_construction;
  let carousel_Partner;
  let carousel_Client;

  let leaders = [
    { id: "1", value: [leader, "Nguyễn văn Nam", "Tổng giám đốc"] },
    { id: "2", value: [leader1, "Nguyễn văn Nam", "Tổng giám đốc"] },
    { id: "3", value: [leader2, "Nguyễn văn Nam", "Tổng giám đốc"] },
    { id: "4", value: [leader3, "Nguyễn văn Nam", "Tổng giám đốc"] },
    { id: "5", value: [leader3, "kasjidj", "Tổng giám đốc"] },
    { id: "6", value: [leader3, "andnhdjad", "Tổng giám đốc"] },
    { id: "7", value: [leader3, "gdkssa", "Tổng giám đốc"] },
    { id: "8", value: [leader3, "spxc", "Tổng giám đốc"] },
    { id: "9", value: [leader3, "csđe", "Tổng giám đốc"] },
    { id: "10", value: [leader3, "abc", "Tổng giám đốc"] },
  ];

  let certificates = [
    { id: "1", value: [certificate, certificate1, certificate3] },
    { id: "2", value: [certificate4, certificate5, certificate6] },
  ];

  const handleNextClick = () => {
    if (carousel) {
      carousel.goToNext();
    }
  };
  const handlePrevClick = () => {
    if (carousel) {
      carousel.goToPrev();
    }
  };

  const handleNextConstructionClick = () => {
    if (carousel_construction) {
      carousel_construction.goToNext();
    }
  };
  const handlePrevConstructionClick = () => {
    if (carousel_construction) {
      carousel_construction.goToPrev();
    }
  };

  const handleNextPartnerClick = () => {
    if (carousel_Partner) {
      carousel_Partner.goToNext();
    }
  };
  const handlePrevPartnerClick = () => {
    if (carousel_Partner) {
      carousel_Partner.goToPrev();
    }
  };

  const handleNextClientClick = () => {
    if (carousel_Client) {
      carousel_Client.goToNext();
    }
  };
  const handlePrevClientClick = () => {
    if (carousel_Client) {
      carousel_Client.goToPrev();
    }
  };

  const updateWidth = () => {
    if (checkWindow) {
      width.set(window.innerWidth);
    }
  };

  onMount(() => {
    if (checkWindow) {
      width.set(window.innerWidth);
      window.addEventListener("resize", updateWidth);
    }
  });

  onDestroy(() => {
    if (checkWindow) {
      window.removeEventListener("resize", updateWidth);
    }
  });

  let clients = [
    { id: "1", value: [client1, client2, client3, client4, client5, client6] },
    {
      id: "2",
      value: [client7, client8, client9, client10, client11, client12],
    },
  ];
</script>

<div class="relative w-full h-full">
  <div class="fixed top-0 left-0 min-w-full bg-white z-20">
    <HeaderComponent />
  </div>

  <div class="mt-[66px]">
    <div class="relative">
      <img
        src={aboutUs_banner}
        alt=""
        class="min-w-full object-cover max-h-full"
      />
      <div
        class="w-[full] h-[full] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <span
          class="text-sm font-semibold
       text-white lg:text-5xl">Về Chúng Tôi</span
        >
      </div>
    </div>

    <div class="flex p-4">
      <span class="text-sm font-medium text-[#777E90]">Trang chủ &gt;</span>
      <span class="text-sm font-medium text-[#777E90]"> Về chúng tôi</span>
    </div>
    <div class="lg:grid lg:grid-cols-2">
      <div>
        <img
          src={img_introduce}
          alt=""
          class="object-cover min-w-full min-h-full"
        />
      </div>

      <div class="relative min-w-full mx-auto min-h-[405px]">
        <div class="h-full w-full">
          <img src={img_introduce1} alt="" class="min-h-[405px] object-cover" />
        </div>
        <div
          class="max-w-full max-h-full
        absolute
        py-4
        lg:top-1/2 top-[10%] left-0 px-5 lg:left-1/2
        lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2
        z-10"
        >
          <span class="text-[#212163] text-[32px] font-semibold"
            >Giới Thiệu</span
          >
          <p class="text-[#353945] font-medium text-justify text-sm">
            ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh
            vực xây dựng các công trình nhà xưởng công nghiệp có vốn đầu tư nước
            ngoài. Thành lập từ năm 2011, ENCO đã trải qua quá trình hoạt động
            và phát triển gần một thập kỷ với các dự án xây dựng hợp tác cùng
            Nhật Bản, Trung Quốc, Đài Loan,... Kết hợp với nhiều năm kinh nghiệm
            làm việc với các tổng thầu lớn của Nhật Bản trước đó, ENCO từ một
            nhà thầu phụ chuyên nghiệp đã vươn lên trở thành tổng thầu chính cho
            các dự án nhà xưởng công nghiệp lớn.
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid lg:grid-cols-4 grid-cols-1 justify-center max-w-[unset] overflow-x-hidden"
    >
      <div class="flex flex-col justify-center items-center p-[67px]">
        <img src={img_chart} alt="" />
        <span class="text-[40px] font-bold text-[#FB342E]">15+</span>
        <p class="text-base font-semibold text-[#141416]">
          Hơn 15 năm kinh nghiệm
        </p>
      </div>

      <div
        class="flex flex-col text-center justify-center items-center p-[67px] border border-x-[#DBDFE4]"
      >
        <img src={img_team} alt="" />
        <span class="text-[40px] font-bold text-[#FB342E]">150+</span>
        <p class="text-base font-semibold text-[#141416]">
          Đội ngũ hơn 150 con người kinh nghiệm với văn hóa đồng lòng, chính
          trực, trách nhiệm
        </p>
      </div>

      <div
        class="flex flex-col justify-center items-center p-[67px] border-r border-r-[#DBDFE4]"
      >
        <img src={img_safe} alt="" />
        <span class="text-[40px] font-bold text-[#FB342E]">500,000+</span>
        <p class="text-base font-semibold text-[#141416]">
          Hơn 500,000 giờ an toàn
        </p>
      </div>

      <div class="flex flex-col justify-center items-center p-[67px]">
        <img src={img_project} alt="" />
        <span class="text-[40px] font-bold text-[#FB342E]">100+</span>
        <p class="text-base font-semibold text-[#141416]">
          Hơn 100 dự án đã hoàn thành
        </p>
      </div>
    </div>

    <div class="bg-[#D9D9D9] w-full min-h-[2050px] lg:min-h-[1150px]">
      <div class="relative">
        <div class="max-w-full h-auto">
          <img src={img_sign} alt="" />
        </div>

        <div class="absolute top-0 left-0 w-full px-5 py-[89px]">
          <div class="lg:flex mx-auto max-w-[1170px] lg:gap-[30px]">
            <div class="lg:w-[70%]">
              <div>
                <p class="text-[#212163] text-4xl lg:flex font-semibold">
                  Thông Điệp
                  <span
                    class="text-[#FB342E] text-4xl flex py-2 lg:py-0 font-semibold"
                    >&#160;Chủ Tịch HĐQT</span
                  >
                </p>
              </div>

              <div
                class="text-sm h-auto
            leading-normal
            font-medium
            text-justify
            text-[#353945]"
              >
                <p class="text-base font-medium text-[#353945] py-3">
                  Kính gửi toàn thể cán bộ, nhân viên và đối tác của ENCO!
                </p>
                <p class="py-2">
                  Tôi, với tư cách là chủ tịch hội đồng quản trị, xin gửi tới
                  quý vị lời chào trân trọng và cảm ơn sâu sắc về sự đóng góp và
                  nỗ lực của quý vị trong suốt thời gian qua.
                </p>
                <p class="py-2">
                  Với mục tiêu trở thành một trong những công ty hàng đầu trong
                  ngành xây dựng, chúng ta đã đạt được nhiều thành tựu đáng kể
                  trong năm vừa qua. Tuy nhiên, để tiếp tục phát triển và bứt
                  phá, chúng ta cần phải tập trung vào những yếu tố quan trọng
                  nhất:
                </p>
                <p class="py-2">
                  Thứ nhất, chúng ta cần phải tăng cường sự chuyên nghiệp hơn
                  nữa trong cách làm việc của mình, từ quản lý đến sản xuất và
                  cung cấp sản phẩm. Chúng ta cần phải luôn đặt lợi ích của
                  khách hàng lên hàng đầu và đáp ứng nhu cầu của họ một cách tốt
                  nhất có thể.
                </p>
                <p class="py-2">
                  Thứ hai, chúng ta cần phải nâng cao chất lượng sản phẩm và
                  dịch vụ của mình. Chúng ta cần phải đảm bảo rằng sản phẩm của
                  chúng ta luôn đáp ứng được các tiêu chuẩn chất lượng cao nhất
                  và được sản xuất bằng các quy trình tiên tiến nhất.
                </p>
                <p class="py-2">
                  Cuối cùng, chúng ta cần phải tăng cường mối quan hệ với đối
                  tác và khách hàng của mình. Chúng ta cần phải xây dựng những
                  mối quan hệ đối tác bền vững và đáp ứng nhu cầu của khách hàng
                  một cách chuyên nghiệp và tận tâm .
                </p>
                <p class="py-2">
                  Tôi muốn nhấn mạnh rằng chúng ta cần phải chủ động trong việc
                  đối phó với những thách thức và cơ hội mới trong ngành xây
                  dựng. Chúng ta cần phải luôn sẵn sàng thích nghi với các thay
                  đổi trong thị trường và đưa ra các chiến lược phù hợp. Tôi tin
                  rằng, với sự nỗ lực và đóng góp của tất cả chúng ta, ENCO sẽ
                  tiếp tục phát triển và bứt phá thành công trong thời gian tới.
                  Cám ơn quý vị đã dành thời gian lắng nghe.
                </p>
                <br />Trân trọng,
              </div>

              <div class="lg:flex lg:flex-col lg:items-end">
                <div class="lg:flex lg:flex-col lg:items-center">
                  <div class="lg:w-[282px] lg:h-[90px]">
                    <img src={signature} alt="" class="max-w-full" />
                  </div>
                  <div class="text-center text-sm text-[#353945] font-semibold">
                    <p>
                      Nguyễn Thanh Sơn
                      <br />Chủ tịch HĐQT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:w-[30%]">
              <div
                class="p-8 min-w-full lg:p-[0] relative flex flex-col justify-center items-center"
              >
                <div
                  class="min-w-full flex flex-col justify-center items-center"
                >
                  <img src={chairperson} alt="" class="min-h-[500px]" />
                </div>

                <div
                  class="bg-[#FB342E] w-[320px] absolute bottom-[50px] min-h-[110px] flex flex-col justify-center items-center"
                >
                  <span class="text-xl font-semibold text-white">Mr.</span>
                  <p class="text-xl font-semibold text-white">
                    Nguyễn Thanh Sơn
                  </p>
                  <p class="text-white font-normal text-sm">(Chủ tịch HĐQT)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mt-[-130px] lg:mt-[-195px]">
      <!-- <div class="lg:h-[460px] lg:bg-[#D9D9D9]"></div> -->
      <img
        src={img_design}
        alt=""
        class="min-h-[925px] object-cover min-w-full"
      />

      <div
        class="absolute
      inset-0
       flex
       flex-col
        items-center
        justify-center
        px-5 lef-0"
      >
        <div class="lg:max-w-[1170px] lg:grid lg:grid-cols-2 lg:mx-auto">
          <div></div>
          <div>
            <span class=" text-white text-[40px] font-semibold"
              >Why Master Builder?</span
            >

            <div class="lg:grid lg:grid-cols-2 gap-5">
              <div>
                <p class="text-white text-sm font-medium text-justify pb-8">
                  Master Builder là người thợ xây bậc thầy, nhân vật trung tâm
                  dẫn đầu các dự án xây dựng trong thời kỳ tiền hiện đại và được
                  dùng để chỉ người đứng đầu một dự án xây dựng trong thời Trung
                  cổ hoặc thời Phục hưng. Không chỉ vậy, đó là tên gọi của các
                  nhà thiết kế, xây dựng chính trong những công trình quy mô lớn
                  thời hiện đại. Đây chính là biểu tượng về sự am hiểu sâu sắc,
                  tài trí, tố chất lãnh đạo trong ngành xây dựng. ENCO chính là
                  những Master Builders chuyên nghiệp, với hiểu biết chuyên môn
                  cao, năng lực thực thi đã được kiểm nghiệm qua thực tế và tinh
                  thần phục vụ luôn ở mức cao nhất.
                </p>
              </div>

              <div>
                <p
                  class="bg-[#FB342E] p-4 text-white text-sm text-justify font-medium"
                >
                  ENCO chính là những Master Builders chuyên nghiệp, với hiểu
                  biết chuyên môn cao, năng lực thực thi đã được kiểm nghiệm qua
                  thực tế và tinh thần phục vụ luôn ở mức cao nhất.
                </p>

                <p class="text-white text-sm text-justify font-medium pt-8">
                  Nhờ kinh nghiệm trực tiếp thi công nhiều năm, chúng tôi hiểu
                  rõ các vấn đề và luôn đưa ra được giải pháp tối ưu, tạo ra
                  những giá trị bền vững, chất lượng và tương xứng nhất với chi
                  phí của khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p
        class="text-[40px] font-semibold p-5 lg:flex text-center justify-center items-center w-full"
      >
        Lịch Sử<span class="text-[#FB342E]">&#160;Hình Thành</span>
      </p>
      {#if $checkScreenMB}
        <div class="p-5 h-full">
          <div class="justify-center items-center flex text-center">
            <div
              class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
            >
              2019 <br />- nay
            </div>
          </div>

          <div
            class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
          ></div>
          <div class="w-full h-full">
            <div class="bg-[#FB342E] min-w-full pt-3 pb-3 px-5 text-center">
              <span
                class="text-xl text-white font-semibold flex flex-col justify-center items-center"
                >Đẩy mạnh hoạt động trong các lĩnh vực</span
              >
            </div>
            <div class="border pt-3 pb-3 px-5">
              <p class="text-base font-normal text-black">
                Đẩy mạnh hoạt động trong các lĩnh vực Tư vấn đầu tư, thiết kế,
                thi công và bàn giao các dự án vốn FDI với vai trò Tổng thầu
                D&B.
              </p>
            </div>
          </div>
        </div>

        <div class="p-5 h-full">
          <div class="justify-center items-center flex text-center">
            <div
              class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
            >
              2018
            </div>
          </div>

          <div
            class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
          ></div>
          <div class="w-full h-full">
            <div class="bg-[#FB342E] min-w-full pt-3 pb-3 px-5 text-center">
              <span
                class="text-xl text-white font-semibold flex flex-col justify-center items-center"
                >Từng bước hoàn thiện bộ máy</span
              >
            </div>
            <div class="border pt-3 pb-3 px-5">
              <p class="text-base font-normal text-black">
                Thay đổi nhận diện thương hiệu, thành lập phòng Kinh doanh,
                phòng Kỹ Thuật, từng bước hoàn thiện bộ máy trên hành trình trở
                thành Tổng thầu D&B với khẩu hiệu “YOUR MASTER BUILDER”.
              </p>
            </div>
          </div>
        </div>

        <div class="p-5 h-full">
          <div class="justify-center items-center flex text-center">
            <div
              class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
            >
              2017
            </div>
          </div>

          <div
            class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
          ></div>
          <div class="w-full h-full">
            <div class="bg-[#FB342E] min-w-full pt-3 pb-3 px-5 text-center">
              <span
                class="text-xl text-white font-semibold flex flex-col justify-center items-center"
                >Dự án Cảng hàng không Quốc tế Viêng Chăn – Lào</span
              >
            </div>
            <div class="border pt-3 pb-3 px-5">
              <p class="text-base font-normal text-black">
                Thi công, bàn giao dự án Cảng hàng không Quốc tế Viêng Chăn –
                Lào, khẳng định về uy tín và chất lượng công trình của Nhà thầu
                Việt Nam đạt tiêu chuẩn quốc tế.
              </p>
            </div>
          </div>
        </div>

        <div class="p-5 h-full">
          <div class="justify-center items-center flex text-center">
            <div
              class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
            >
              2011
            </div>
          </div>

          <div
            class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
          ></div>
          <div class="w-full h-full">
            <div class="bg-[#FB342E] min-w-full pt-3 pb-3 px-5 text-center">
              <span
                class="text-xl text-white font-semibold flex flex-col justify-center items-center"
                >Thành lập Công ty Cổ phần Enco Industry</span
              >
            </div>
            <div class="border pt-3 pb-3 px-5">
              <p class="text-base font-normal text-black">
                Thành lập Công ty Cổ phần Enco Industry, lĩnh vực hoạt động chủ
                yếu là các dự án thi công, xây lắp do Tổng thầu Nhật Bản chủ
                trì.
              </p>
            </div>
          </div>
        </div>
      {/if}

      {#if $checkScreen}
        <div class="px-5 h-full py-[74px] mx-auto max-w-[1170px]">
          <div class="flex items-center">
            <div class="min-w-[40%]">
              <div
                class="p-7 border bg-[#F0F3F6] border-r-[6px] border-r-[#FB342E] relative border-r-triangle"
              >
                <span class="text-[#141416] font-semibold text-base"
                  >Đẩy mạnh hoạt động trong các lĩnh vực</span
                >
                <p class="pt-4 text-[#777E90] text-sm font-normal">
                  Đẩy mạnh hoạt động trong các lĩnh vực Tư vấn đầu tư, thiết kế,
                  thi công và bàn giao các dự án vốn FDI với vai trò Tổng thầu
                  D&B.
                </p>
              </div>
            </div>
            <div class=" min-w-[20%]">
              <div
                class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
              <div class="justify-center items-center flex text-center">
                <div
                  class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
                >
                  2019 <br />- nay
                </div>
              </div>
              <div
                class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
            </div>
            <div class="min-w-[40%]"></div>
          </div>

          <div class="flex items-center">
            <div class="min-w-[40%]"></div>

            <div class=" min-w-[20%]">
              <div
                class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
              <div class="justify-center items-center flex text-center">
                <div
                  class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
                >
                  2018
                </div>
              </div>
              <div
                class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
            </div>
            <div class="min-w-[40%]">
              <div
                class="p-7 border bg-[#F0F3F6] border-l-[6px] border-l-[#FB342E] relative border-l-triangle"
              >
                <span class="text-[#141416] font-semibold text-base"
                  >Từng bước hoàn thiện bộ máy</span
                >
                <p class="pt-4 text-[#777E90] text-sm font-normal">
                  Thay đổi nhận diện thương hiệu, thành lập phòng Kinh doanh,
                  phòng Kỹ Thuật, từng bước hoàn thiện bộ máy trên hành trình
                  trở thành Tổng thầu D&B với khẩu hiệu “YOUR MASTER BUILDER”.
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="min-w-[40%]">
              <div
                class="p-7 border bg-[#F0F3F6] border-r-[6px] border-r-[#FB342E] relative border-r-triangle"
              >
                <span class="text-[#141416] font-semibold text-base"
                  >Dự án Cảng hàng không Quốc tế Viêng Chăn – Lào</span
                >
                <p class="pt-4 text-[#777E90] text-sm font-normal">
                  Thi công, bàn giao dự án Cảng hàng không Quốc tế Viêng Chăn –
                  Lào, khẳng định về uy tín và chất lượng công trình của Nhà
                  thầu Việt Nam đạt tiêu chuẩn quốc tế.
                </p>
              </div>
            </div>
            <div class=" min-w-[20%]">
              <div
                class="w-1/2 h-[65px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
              <div class="justify-center items-center flex text-center">
                <div
                  class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
                >
                  2017
                </div>
              </div>
              <div
                class="w-1/2 h-[65px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
            </div>
            <div class="min-w-[40%]"></div>
          </div>

          <div class="flex items-center">
            <div class="min-w-[40%]"></div>

            <div class=" min-w-[20%]">
              <div
                class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
              <div class="justify-center items-center flex text-center">
                <div
                  class="w-[80px] h-[80px] bg-[#FB342E] text-center flex flex-col justify-center items-center text-white font-semibold text-base rounded-[50%]"
                >
                  2011
                </div>
              </div>
              <div
                class="w-1/2 h-[50px] border border-l-white border-t-white border-b-white border-r-[#FB342E]"
              ></div>
            </div>
            <div class="min-w-[40%]">
              <div
                class="p-7 border bg-[#F0F3F6] border-l-[6px] border-l-[#FB342E] relative border-l-triangle"
              >
                <span class="text-[#141416] font-semibold text-base"
                  >Thành lập Công ty Cổ phần Enco Industry</span
                >
                <p class="pt-4 text-[#777E90] text-sm font-normal">
                  Thành lập Công ty Cổ phần Enco Industry, lĩnh vực hoạt động
                  chủ yếu là các dự án thi công, xây lắp do Tổng thầu Nhật Bản
                  chủ trì.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <div class="bg-[#F0F3F6] min-w-full min-h-[770px]">
      <div
        class="lg:max-w-[1170px] lg:py-28 py-8 lg:mx-auto lg:flex lg:space-x-[50px]"
      >
        <div class="pb-8 lg:max-w-[50%]">
          <div class="px-5 w-full lg:relative">
            <div class="lg:mr-[50px]">
              <img src={vision} alt="" class="min-h-[370px] min-w-full" />
            </div>
            <div
              class="bg-[#FB342E] min-h-[260px] lg:absolute lg:w-[calc(100%-50px)] lg:ml-[50px] lg:bottom-[-175px]"
            >
              <div class="relative">
                <img src={sign1} alt="" class="lg:min-h-[260px]" />
                <div class="absolute top-0 p-[40px]">
                  <div class="flex justify-between">
                    <span class="text-4xl text-white font-semibold pb-5"
                      >Tầm nhìn</span
                    >
                    <div>
                      <img src={img_vision} alt="" />
                    </div>
                  </div>
                  <p class="text-white text-xl text-justify font-semibold">
                    Trở thành doanh nghiệp uy tín hàng đầu trong lĩnh vực xây
                    dựng nhà xưởng công nghiệp tại Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:max-w-[50%]">
          <div class="px-5 w-full lg:relative">
            <div class="lg:mr-[50px]">
              <img src={mission} alt="" class="lg:min-h-[370px] min-w-full" />
            </div>
            <div
              class="bg-[#FB342E] lg:min-h-[260px] min-h-[320px] lg:absolute lg:w-[calc(100%-50px)] lg:ml-[50px] lg:bottom-[-175px]"
            >
              <div class="relative">
                <div>
                  <img src={sign1} alt="" />
                </div>
                <div class="absolute top-0 p-[40px]">
                  <div class="my-auto">
                    <div class="flex justify-between">
                      <span class="text-4xl text-white font-semibold pb-5"
                        >Sứ mệnh</span
                      >
                      <div>
                        <img src={target} alt="" />
                      </div>
                    </div>
                    <div class="text-white text-xl text-justify font-semibold">
                      <p>
                        Khẳng định với nhà đầu tư nước ngoài về uy tín và chất
                        lượng công trình đạt tiêu chuẩn quốc tế của các tổng
                        thầu xây dựng công nghiệp Việt Nam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#212163] min-h-[500px]">
      <div class="lg:max-w-[1170px] lg:mx-auto">
        <div class="pt-[77px] mb-[90px]">
          <p
            class="lg:text-[40px] text-[32px] font-semibold px-5 pb-7 lg:flex justify-start lg:w-[50%] w-full"
          >
            Đội Ngũ <span class="text-[#FB342E]">&#160;Lãnh Đạo</span>
          </p>
          <div class="lg:flex lg:w-full">
            <div class="lg:min-w-[70%]">
              <p class="text-sm text-white text-justify px-5 font-normal">
                Đội ngũ ENCO chính là tập hợp của những con người phù hợp nhất:
                đồng tâm hiệp lực trong mọi hoạt động, tinh thần trách nhiệm,
                cách ứng xử phù hợp. Từ đó, chúng tôi luôn tìm được hướng đi
                thống nhất và hiệu quả cho các yêu cầu xây dựng riêng biệt, để
                cùng chung sức tiến đến mục tiêu cuối cùng. Hơn cả một doanh
                nghiệp thông thường, ENCO tự hào là một tập thể gắn kết với tình
                cảm gia đình được duy trì nhờ văn hóa đồng lòng và trách nhiệm
                với khách hàng, công việc và đồng nghiệp.
              </p>
            </div>
            <div class="min-w-[30%]">
              <div class="flex gap-[15px] justify-end items-end lg:mt-[120px]">
                <button on:click={handlePrevClick}>
                  <img
                    src={prev}
                    alt=""
                    class="min-w-[44px] min-h-[44px] rounded-[50%] bg-[#35368B] hover:bg-[#FB342E]"
                  />
                </button>

                <button on:click={handleNextClick}>
                  <img
                    src={next}
                    alt=""
                    class="min-w-[44px] min-h-[44px] rounded-[50%] bg-[#35368B] hover:bg-[#FB342E]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="pb-[70px] max-w-[1270px] lg:mt-[-150px] ml-auto">
        {#if $checkScreen}
          {#if typeof window !== "undefined"}
            <Carousel
              bind:this={carousel}
              dots={false}
              particlesToShow={5}
              particlesToScroll={2}
              swiping={true}
              autoplay
              arrows={false}
              autoplayDuration={5000}
            >
              {#each leaders as leader, index}
                <div class="relative ml-[30px]">
                  <img
                    src={leader.value[0]}
                    alt=""
                    class="min-w-[270px] max-h-[330px]"
                  />
                  <div
                    class="bg-[#FB342E] cut-corner w-[250px] absolute flex flex-col gap-[6px] justify-center items-center bottom-0 left-0 py-6"
                  >
                    <span class="text-white text-xl font-semibold">
                      {leader.value[1]}
                    </span>
                    <p class="text-white text-sm font-normal">
                      {leader.value[2]}
                    </p>
                  </div>
                </div>
              {/each}
            </Carousel>
          {/if}
        {/if}

        {#if $checkScreenMB}
          {#if typeof window !== "undefined"}
            <Carousel
              bind:this={carousel}
              dots={false}
              particlesToShow={2}
              particlesToScroll={1}
              swiping={true}
              autoplay
              arrows={false}
              autoplayDuration={5000}
            >
              {#each leaders as leader, index}
                <div class="relative ml-28">
                  <div class="flex flex-col justify-center items-center">
                    <div>
                      <img
                        src={leader.value[0]}
                        alt=""
                        class="min-w-[270px] max-h-[330px]"
                      />
                    </div>

                    <div
                      class="cut-corner bg-[#FB342E] w-[250px] absolute flex flex-col gap-[6px] justify-center items-center bottom-0 left-0 py-6"
                    >
                      <span class="text-white text-xl font-semibold"
                        >{leader.value[1]}</span
                      >
                      <p class="text-white text-sm font-normal">
                        {leader.value[2]}
                      </p>
                    </div>
                  </div>
                </div>
              {/each}
            </Carousel>
          {/if}
        {/if}
      </div>
    </div>

    <div class="construction min-h-[760px] px-5 min-w-full">
      <div class="max-w-[1170px] mx-auto">
        <div
          class="text-center lg:flex lg:justify-center lg:items-center pt-[78px]"
        >
          <p class="text-[32px] font-semibold pt-5 lg:pt-0">
            Năng Lực Thi Công
          </p>
          <p class="text-[32px] font-semibold text-[#FB342E]">
            & Quản Lý Thi Công
          </p>
        </div>

        <div
          class="text-center lg:px-[135px] text-[#353945] lg:min-w-[783px] text-base font-normal mt-[37px] pb-[50px]"
        >
          <p>
            ENCO đáp ứng được các tiêu chuẩn về hệ thống quản lý chất lượng, an
            toàn, sức khoẻ môi trường trong quá trình xây dựng. Khách hàng của
            ENCO có thể yên tâm về chất lượng sản phẩm và dịch vụ đáp ứng được
            các tiêu chuẩn quốc tế và đáp ứng các yêu cầu khắt khe của khách
            hàng.
          </p>
        </div>
        <div class="relative group">
          <Carousel
            bind:this={carousel_construction}
            dots={false}
            swiping={true}
            autoplay
            arrows={false}
            autoplayDuration={5000}
          >
            {#each certificates as certificate, index}
              <div
                class="text-center flex justify-center items-center flex-col lg:flex-row lg:gap-36"
              >
                <div>
                  <img
                    src={certificate.value[0]}
                    alt=""
                    class="h-[370px] w-[250px]"
                  />
                </div>

                <div class="py-6">
                  <img
                    src={certificate.value[1]}
                    alt=""
                    class="h-[370px] w-[250px]"
                  />
                </div>

                <div>
                  <img
                    src={certificate.value[2]}
                    alt=""
                    class="h-[370px] w-[250px]"
                  />
                </div>
              </div>
            {/each}
          </Carousel>

          <div class="hidden group-hover:block">
            <div class="absolute inset-0 flex items-center justify-between">
              <button
                class="bg-black z-10 opacity-50 hover:bg-[#FB342E]"
                on:click={handlePrevConstructionClick}
              >
                <img src={prev_construction} alt="" />
              </button>

              <button
                class="bg-black z-10 opacity-50 hover:bg-[#FB342E]"
                on:click={handleNextConstructionClick}
              >
                <img src={next_construction} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#FFF] py-14">
      <div class="max-w-[1170px] mx-auto lg:grid lg:grid-cols-2">
        <div class="px-5 max-h-full">
          <div class="flex lg:justify-between lg:items-center">
            <span class="text-[32px] font-semibold text-[#FB342E]"
              >Khách hàng</span
            >
            <div class="hidden lg:block">
              <button on:click={handlePrevClientClick}>
                <img
                  src={prev_black}
                  alt=""
                  class="min-w-[44px] min-h-[44px] mr-[30px] rounded-[50%] bg-[#F0F3F6] hover:bg-[#FB342E]"
                />
              </button>

              <button on:click={handleNextClientClick}>
                <img
                  src={next_black}
                  alt=""
                  class="min-w-[44px] min-h-[44px] rounded-[50%] bg-[#F0F3F6] hover:bg-[#FB342E]"
                />
              </button>
            </div>
          </div>
          <Carousel
            bind:this={carousel_Client}
            dots={false}
            arrows={false}
            swiping={true}
            autoplay
            autoplayDuration={5000}
          >
            {#each clients as client, index}
              <div class="pt-6 w-full h-full">
                <div class="grid grid-cols-3">
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[0]} alt="" class="max-h-full" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[1]} alt="" class="max-h-full" />
                  </div>

                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[2]} alt="" class="max-h-full" />
                  </div>
                </div>

                <div class="grid grid-cols-3">
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[3]} alt="" class="max-h-full" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[4]} alt="" class="max-h-full" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[5]} alt="" class="max-h-full" />
                  </div>
                </div>
              </div>
            {/each}
          </Carousel>
        </div>

        <div class="px-5 py-10 lg:py-0 min-h-full">
          <div class="flex lg:justify-between lg:items-center">
            <span class="text-[32px] font-semibold text-[#212163]">Đối Tác</span
            >
            <div class="hidden lg:block">
              <button on:click={handlePrevPartnerClick}>
                <img
                  src={prev_black}
                  alt=""
                  class="min-w-[44px] min-h-[44px] mr-[30px] rounded-[50%] bg-[#F0F3F6] hover:bg-[#FB342E]"
                />
              </button>

              <button on:click={handleNextPartnerClick}>
                <img
                  src={next_black}
                  alt=""
                  class="min-w-[44px] min-h-[44px] rounded-[50%] bg-[#F0F3F6] hover:bg-[#FB342E]"
                />
              </button>
            </div>
          </div>

          <Carousel
            bind:this={carousel_Partner}
            dots={false}
            arrows={false}
            swiping={true}
            autoplay
            autoplayDuration={5000}
          >
            {#each clients as client, index}
              <div class="pt-6">
                <div class="grid grid-cols-3">
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[0]} alt="" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[1]} alt="" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[2]} alt="" />
                  </div>
                </div>

                <div class="grid grid-cols-3">
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[3]} alt="" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[4]} alt="" />
                  </div>
                  <div
                    class="border border-[#DBDFE4] flex flex-col justify-center items-center"
                  >
                    <img src={client.value[5]} alt="" class="max-w-full" />
                  </div>
                </div>
              </div>
            {/each}
          </Carousel>
        </div>
      </div>
    </div>
    <FooterComponent />
    <ButtonScrollTop />
  </div>
</div>

<style>
  .cut-corner {
    clip-path: polygon(0 0, 90% 0, 100% 20%, 100% 100%, 0% 100%);
  }
  .border-r-triangle::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent transparent #fb342e;
  }

  .border-l-triangle::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    border-width: 15px;
    border-style: solid;
    border-color: transparent #fb342e transparent transparent;
  }
  .construction {
    background-image: url("../../lib/asset/bg_construction.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
