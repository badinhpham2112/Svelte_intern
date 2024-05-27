<script>
  import Carousel from "svelte-carousel";
  import "../../../tailwindCSS.css";
  import seeMore from "../../../lib/asset/seeMore.png";
  import prev from "../../../lib/asset/prev.svg";
  import next from "../../../lib/asset/next.png";
  import baner1 from "../../../lib/asset/baner1.png";
  import banner2 from "../../../lib/asset/banner2.jpg";
  import banner3 from "../../../lib/asset/banner3.jpg";
  import banner4 from "../../../lib/asset/banner4.jpg";
  import img_introduce from "../../../lib/asset/img_introduce.png";
  import img_introduce1 from "../../../lib/asset/img_introduce1.png";
  import img_chart from "../../../lib/asset/img_chart.png";
  import img_team from "../../../lib/asset/img_team.png";
  import img_safe from "../../../lib/asset/img_safe.png";
  import img_project from "../../../lib/asset/img_project.png";
  import intersect1 from "../../../lib/asset/Intersect1.png";
  import intersect2 from "../../../lib/asset/Intersect2.png";
  import complete_img from "../../../lib/asset/complete_img.png";
  import location from "../../../lib/asset/location.png";
  import Accomplished1 from "../../../lib/asset/Accomplished1.png";
  import Accomplished2 from "../../../lib/asset/Accomplished2.png";
  import Accomplished3 from "../../../lib/asset/Accomplished3.png";
  import Accomplished4 from "../../../lib/asset/Accomplished4.png";
  import outstanding1 from "../../../lib/asset/outstanding1.png";
  import outstanding2 from "../../../lib/asset/outstanding2.png";
  import outstanding3 from "../../../lib/asset/outstanding3.png";
  import outstanding4 from "../../../lib/asset/outstanding4.png";
  import Goup from "../../../lib/asset/Goup.png";
  import opportunity from "../../../lib/asset/opportunity.png";
  import Frame from "../../../lib/asset/Frame.png";
  import Frame1 from "../../../lib/asset/Frame1.png";
  import client1 from "../../../lib/asset/client1.png";
  import client2 from "../../../lib/asset/client2.png";
  import client3 from "../../../lib/asset/client3.png";
  import client4 from "../../../lib/asset/client4.png";
  import client5 from "../../../lib/asset/client5.png";
  import client6 from "../../../lib/asset/client6.png";
  import client7 from "../../../lib/asset/client1.png";
  import client8 from "../../../lib/asset/client2.png";
  import client9 from "../../../lib/asset/client3.png";
  import client10 from "../../../lib/asset/client4.png";
  import client11 from "../../../lib/asset/client5.png";
  import client12 from "../../../lib/asset/client6.png";
  import ButtonScrollTop from "../../../Components/ButtonScrollTop.svelte";
  import FooterComponent from "../../../Components/FooterComponent.svelte";
  import HeaderComponent from "../../../Components/HeaderComponent.svelte";
  import prev_black from "../../../lib/asset/prev_black.png";
  import next_black from "../../../lib/asset/Next_black.png";
  import prev_construction from "../../../lib/asset/prev.svg";
  import next_construction from "../../../lib/asset/next.png";
  export let buttonVisibleOnPX = 100;
  let isScrolled = false;
  let currentIndex = 0;
  let carousel_Partner;
  let carousel_Client;
  let carousel_Ongoing_projects;

  let HomeSlides = [baner1, banner2, banner3, banner4];
  let completes = [
    { id: "1", value: [complete_img, "Sumi", "KCN Thái Hà - Hà Nam"] },
    {
      id: "2",
      value: [
        banner4,
        "Dự án xây dựng Nhà máy Forcecon Việt Nam",
        "KCN Thái Hà - Hà Nam",
      ],
    },
    {
      id: "3",
      value: [
        banner2,
        "Dự án xây dựng TT Logistic và dịch vụ Logistic Viet Nam Inverst tại Bắc Ninh",
        "KCN Yên Phong II C - Bắc Ninh",
      ],
    },
  ];

  let Accomplisheds = [
    {
      id: "1",
      value: [Accomplished1, "Bagiaco Phamar", "KCN Thái Hà - Hà Nam"],
    },
    {
      id: "2",
      value: [Accomplished2, "Fudy", "KCN Thái Hà - Hà Nam"],
    },
    {
      id: "3",
      value: [Accomplished3, "Kang Yang", "KCN Yên Phong II C - Bắc Ninh"],
    },

    {
      id: "4",
      value: [Accomplished4, "Terumo", "KCN Yên Phong II C - Bắc Ninh"],
    },
  ];

  let clients = [
    { id: "1", value: [client1, client2, client3, client4, client5, client6] },
    {
      id: "2",
      value: [client7, client8, client9, client10, client11, client12],
    },
  ];

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % HomeSlides.length;
  };

  const prevSlide = () => {
    currentIndex =
      currentIndex === 0 ? HomeSlides.length - 1 : currentIndex - 1;
  };

  const goToSlide = (index) => {
    currentIndex = index;
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

  const handleNextOngoingprojectsClick = () => {
    if (carousel_Ongoing_projects) {
      carousel_Ongoing_projects.goToNext();
    }
  };
  const handlePrevOngoingprojectsClick = () => {
    if (carousel_Ongoing_projects) {
      carousel_Ongoing_projects.goToPrev();
    }
  };

  const handleScroll = () => {
    if (scrollElement().scrollTop > buttonVisibleOnPX) {
      isScrolled = true;
    } else {
      isScrolled = false;
    }
  };

  const scrollElement = () => {
    return document.documentElement || document.body;
  };
</script>

<svelte:window on:scroll={handleScroll} />
<div class="relative w-full h-full">
  <div
    class="fixed top-0 lg:mt-8 left-0 w-full z-[99] {isScrolled
      ? '!mt-0 bg-white'
      : ''}"
  >
    <HeaderComponent />
  </div>
  <div class="w-full h-full">
    <div class="relative">
      <Carousel
        bind:currentIndex
        dots={false}
        arrows={false}
        swiping={true}
        autoplay
        autoplayDuration={5000}
      >
        <div
          class="flex transition-transform duration-500 ease-out h-[100vh]"
          style="transform: translateX(-{currentIndex * 100}%)"
        >
          {#each HomeSlides as HomeSlides, index}
            <img
              src={HomeSlides}
              alt="Slide {index}"
              class="min-w-full object-cover max-h-[full]"
            />
          {/each}
        </div>
      </Carousel>

      <div
        class="lg:max-w-[71%] h-[full] absolute max-w-full top-[15%] p-16 lg:top-1/2 lg:left-[38.1%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"
      >
        <span
          class="text-white lg:text-[32px] text-justify text-xl font-semibold"
          >Doanh nghiệp uy tín hàng đầu trong lĩnh vực xây dựng nhà xưởng công
          nghiệp tại Việt Nam</span
        >
        <p
          class="text-white lg:text-xl text-justify text-sm font-normal pt-7 pb-10"
        >
          ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh vực
          xây dựng các công trình nhà xưởng công nghiệp có vốn đầu tư nước ngoài
        </p>
        <div class="flex items-center gap-4">
          <span class="text-white text-xl font-semibold">xem thêm</span>
          <img src={seeMore} alt="" class="w-[50px] h-[50px]" />
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-between p-4">
        <button
          class="bg-black z-10 opacity-50 hover:bg-[#FB342E]"
          on:click={prevSlide}
        >
          <img src={prev} alt="" />
        </button>

        <button
          class="bg-black z-10 opacity-50 hover:bg-[#FB342E]"
          on:click={nextSlide}
        >
          <img src={next} alt="" />
        </button>
      </div>

      <div class="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        {#each HomeSlides as HomeSlide, index}
          <button
            type="button"
            class="w-10 h-[5px] mx-1 cursor-pointer"
            class:selected={index === currentIndex}
            on:click={() => goToSlide(index)}
            aria-label={`HomeSlide ${index + 1}`}
            style="background-color: {index === currentIndex
              ? '#FB342E'
              : '#666'}"
          ></button>
        {/each}
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 items-center">
      <div>
        <img src={img_introduce} alt="" class="min-w-full" />
      </div>

      <div class="relative w-full h-full">
        <div class="w-full h-full">
          <img
            src={img_introduce1}
            alt=""
            class="object-cover min-w-full min-h-[705px] lg:min-h-full"
          />
        </div>

        <div
          class="max-w-[720px]
        absolute max-h-full
        overflow-w
        top-1/2
        left-1/2 transform
        -translate-x-1/2
        -translate-y-1/2
        z-10"
        >
          <span class="text-[32px] font-semibold text-[#212163]"
            >về với chúng tôi</span
          >
          <p class="text-sm font-medium text-[#353945] text-justify pt-5 pb-8">
            ENCO Industry là doanh nghiệp uy tín hàng đầu miền Bắc trong lĩnh
            vực xây dựng các công trình nhà xưởng công nghiệp có vốn đầu tư nước
            ngoài. Thành lập từ năm 2011, ENCO đã trải qua quá trình hoạt động
            và phát triển gần một thập kỷ với các dự án xây dựng hợp tác cùng
            Nhật Bản, Trung Quốc, Đài Loan,... Kết hợp với nhiều năm kinh nghiệm
            làm việc với các tổng thầu lớn của Nhật Bản trước đó, ENCO từ một
            nhà thầu phụ chuyên nghiệp đã vươn lên trở thành tổng thầu chính cho
            các dự án nhà xưởng công nghiệp lớn.
          </p>
          <div
            class="flex flex-col lg:flex-row justify-center items-center gap-5"
          >
            <button
              class="w-60 h-[60px] mb-11 lg:mb-0 bg-[#35368B] text-white text-xl font-semibold text-center"
              >Tải Profile</button
            >
            <button
              class="w-60 h-[60px] bg-[#FB342E] text-white text-xl font-semibold text-center"
              >Tìm hiểu thêm</button
            >
          </div>
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
        class="flex flex-col justify-center items-center p-[67px] border border-l-[#DBDFE4]"
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

    <div class="bg-[#212163] lg:py-[66px]">
      <div class="max-w-[1170px] mx-auto">
        <div class="lg:flex gap-6 min-w-full">
          <p
            class="lg:text-[40px] text-[32px] font-semibold p-5 lg:flex justify-start lg:w-[50%] w-full"
          >
            Linh Vực <span class="text-[#FB342E]">&#160;Hoạt Động</span>
          </p>

          <div class="flex items-center pl-5 gap-3 lg:justify-end w-[50%]">
            <a
              href="/linh-vuc-hoat-dong"
              class="uppercase text-xl font-semibold text-white"
            >
              Xem thêm
            </a>
            <img src={seeMore} alt="" class="text-[#FB342E]" />
          </div>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 p-5 gap-6">
          <a href="/linh-vuc-hoat-dong">
            <div
              class="bg-[#35368B] min-w-[50%] max-h-[370px] flex hover:bg-[#FB342E]"
            >
              <div class="text-[26px] font-semibold">
                <div class="relative max-w-[90%] top-[10%] left-[25%]">
                  <div class="flex items-center gap-4 pb-2">
                    <div class="min-w-[20px] border border-white"></div>
                    <p class="text-white">01.</p>
                  </div>
                  <u class="text-white">
                    Tổng thầu Design & Build Xây dựng & Cơ điện
                  </u>
                </div>
              </div>

              <div class="w-full min-h-[370px]">
                <img src={intersect2} alt="" class="h-full min-w-full" />
              </div>
            </div>
          </a>

          <a href="/linh-vuc-hoat-dong" class="pb-8 lg:pb-0">
            <div
              class="bg-[#35368B] min-w-[50%] max-h-[370px] flex hover:bg-[#FB342E]"
            >
              <div class="text-[26px] font-semibold">
                <div class="relative max-w-[%] top-[10%] left-[25%]">
                  <div class="flex items-center gap-4 pb-2">
                    <div class="min-w-[20px] border border-white"></div>
                    <p class="text-white">02.</p>
                  </div>
                  <u class="text-white"> Tổng thầu thi công xây dựng</u>
                </div>
              </div>
              <div class="w-full min-h-[370px]">
                <img src={intersect1} alt="" class="h-full min-w-full" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-[#F0F3F6] p-4">
      <div
        class=" max-w-[1170px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div>
          <div class="py-5">
            <span
              class="w-full uppercase text-[32px] font-semibold text-[#212163]"
            >
              Dự án <p class="text-[#FB342E] p-0">đang thực hiện</p>
            </span>
            <div class="flex uppercase gap-4 items-center w-full">
              <span class="text-sm text-[#777E90] font-semibold">Xem thêm</span>
              <img src={seeMore} alt="" />
            </div>
          </div>
          <div class="relative group">
            <Carousel
              bind:this={carousel_Ongoing_projects}
              dots={false}
              arrows={false}
              swiping={true}
              autoplay
              autoplayDuration={5000}
            >
              {#each completes as complete}
                <div class="">
                  <img src={complete.value[0]} alt="" class="min-w-full" />

                  <div class="bg-white py-[22px] pl-4">
                    <span class="text-[32px] font-semibold text-[#141416]"
                      >{complete.value[1]}</span
                    >
                    <span class="flex gap-3 mt-2">
                      <img src={location} alt="" />
                      <span class="text-base font-medium text-[#353945]"
                        >{complete.value[2]}</span
                      >
                    </span>
                  </div>
                </div>
              {/each}
            </Carousel>
            <div class="hidden group-hover:block p-[-5px]">
              <div class="absolute inset-0 flex items-center justify-between">
                <button
                  on:click={handlePrevOngoingprojectsClick}
                  class="bg-black z-10 opacity-50 hover:bg-[#FB342E]"
                >
                  <img src={prev_construction} alt="" />
                </button>

                <button
                  on:click={handleNextOngoingprojectsClick}
                  class="bg-black z-10 opacity-50 hover:bg-[#FB342E]"
                >
                  <img src={next_construction} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="py-5">
            <span
              class="w-full uppercase text-[32px] font-semibold text-[#212163]"
            >
              Dự án <p class="text-[#FB342E] p-0">đã hoàn thành</p>
            </span>
            <div class="flex uppercase gap-4 items-center w-full">
              <span class="text-sm text-[#777E90] font-semibold">Xem thêm</span>
              <img src={seeMore} alt="" />
            </div>
          </div>

          <!-- <div class="grid grid-cols-2"> -->
          <div class="flex flex-col gap-8 lg:grid lg:grid-cols-2 pb-12">
            {#each Accomplisheds as Accomplished}
              <div class="">
                <img src={Accomplished.value[0]} alt="" class="min-w-full" />

                <div class="bg-white py-[22px] pl-4">
                  <span class="text-[32px] font-semibold text-[#141416]"
                    >{Accomplished.value[1]}</span
                  >
                  <span
                    class="flex gap-3 lg:justify-center lg:items-center mt-2"
                  >
                    <img
                      src={location}
                      alt=""
                      class="lg:w-[18px] lg:h-[22px]"
                    />
                    <span class="text-base font-medium text-[#353945]"
                      >{Accomplished.value[2]}</span
                    >
                  </span>
                </div>
              </div>
            {/each}
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>

    <div class="bg-[#FFF] p-5">
      <div class="max-w-[1170px] mx-auto">
        <div>
          <div class="py-5 lg:flex gap-6 min-w-full">
            <p
              class="w-full flex justify-start lg:w-[50%] uppercase text-[32px] font-semibold text-[#212163]"
            >
              Tin Tức <span class="text-[#FB342E] p-0">Nổi Bật</span>
            </p>
            <div
              class="flex lg:justify-end lg:w-[50%] uppercase gap-4 items-center w-full"
            >
              <span class="text-sm text-[#777E90] font-semibold">Xem thêm</span>
              <img src={seeMore} alt="" />
            </div>
          </div>
        </div>
        <div class="border-t border-t-[#DBDFE4]"></div>
        <div class="grid grid-cols-1 lg:grid-cols-4 pb-10">
          <div>
            <div class="pt-4 lg:pr-4 flex flex-col">
              <img src={outstanding1} alt="" class="min-w-full object-cover" />
              <div class="px-5 flex flex-col">
                <span
                  class="text-[14px] font-semibold text-[#FB342E] pb-[14px] pt-6"
                  >Tin nội bộ</span
                >
                <span class="text-[#141416] text-xl font-semibold"
                  >Enco tổ chức chương trình du lịch hè 2022</span
                >
                <p class="text-[#353945] text-sm font-normal py-[41px]">
                  Để tăng cường sự kết nối, giao lưu giữa các bộ phận, các phòng
                  ban và các thành viên trong Công ty, hàng năm ENCO đều tổ chức
                  các chương trình du lịch hè kết hợp team building cho các
                  CBNV.
                </p>
                <div class="flex justify-between">
                  <span class="text-[##777E90] text-sm font-normal"
                    >16 / 10 / 2022</span
                  >
                  <span class="min-w-1/2 flex flex-col justify-end">
                    <img src={Goup} alt="" class="max-w-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="pt-4 lg:border-x lg:border-x-[#DBDFE4] lg:px-4 flex flex-col"
            >
              <img src={outstanding2} alt="" class="min-w-full object-cover" />
              <div class="px-5 flex flex-col">
                <span
                  class="text-[14px] font-semibold text-[#FB342E] pb-[14px] pt-6"
                  >Tin nội bộ</span
                >
                <span class="text-[#141416] text-xl font-semibold"
                  >Lễ khởi công dự án nhà máy công nghệ bao bì xanh Hiệp Phú</span
                >
                <p class="text-[#353945] text-sm font-normal py-[41px]">
                  Ngày 13/04/2022, ENCO cùng chủ đầu tư Công ty TNHH Công nghệ
                  Bao bì xanh Hiệp Phú đã tổ chức Lễ khởi công dự án xây dựng
                  nhà máy Công nghệ Bao bì xanh Hiệp Phú tại TP. Bắc Ninh.
                </p>
                <div class="flex justify-between">
                  <span class="text-[##777E90] text-sm font-normal"
                    >16 / 10 / 2022</span
                  >
                  <span class="min-w-1/2 flex flex-col justify-end">
                    <img src={Goup} alt="" class="max-w-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="pt-4 lg:px-4 lg:border-r lg:border-r-[#DBDFE4] flex flex-col"
            >
              <img src={outstanding3} alt="" class="min-w-full object-cover" />
              <div class="px-5 flex flex-col">
                <span
                  class="text-[14px] font-semibold text-[#FB342E] pb-[14px] pt-6"
                  >Tin nội bộ</span
                >
                <span class="text-[#141416] text-xl font-semibold"
                  >Enco tổ chức chương trình du lịch hè 2022</span
                >
                <p class="text-[#353945] text-sm font-normal py-[41px]">
                  Để tăng cường sự kết nối, giao lưu giữa các bộ phận, các phòng
                  ban và các thành viên trong Công ty, hàng năm ENCO đều tổ chức
                  các chương trình du lịch hè kết hợp team building cho các
                  CBNV.
                </p>
                <div class="flex justify-between">
                  <span class="text-[##777E90] text-sm font-normal"
                    >16 / 10 / 2022</span
                  >
                  <span class="min-w-1/2 flex flex-col justify-end">
                    <img src={Goup} alt="" class="max-w-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="pt-4 lg:px-4 flex flex-col">
              <img src={outstanding4} alt="" class="min-w-full object-cover" />
              <div class="px-5 flex flex-col">
                <span
                  class="text-[14px] font-semibold text-[#FB342E] pb-[14px] pt-6"
                  >Tin nội bộ</span
                >
                <span class="text-[#141416] text-xl font-semibold"
                  >Thông báo thông thay đổi người đại diện theo pháp luật</span
                >
                <p class="text-[#353945] text-sm font-normal py-[41px]">
                  Công ty CP ENCO industry xin trân trọng thông báo, kể từ ngày
                  03/08/2022 chúng tôi chính thức thay đổi người đại diện theo
                  pháp luật trong mọi giao dịch với Quý khách hàng và đối tác.
                </p>
                <div class="flex justify-between">
                  <span class="text-[##777E90] text-sm font-normal"
                    >16 / 10 / 2022</span
                  >
                  <span class="min-w-1/2 flex flex-col justify-end">
                    <img src={Goup} alt="" class="max-w-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="bg-[#F0F3F6] pb-10">
        <div class="p-5 max-w-[1170px] mx-auto">
          <div class="py-10 lg:flex gap-6 min-w-full">
            <p
              class="w-full uppercase text-[32px] flex justify-start lg:w-[50%] font-semibold text-[#212163]"
            >
              Cơ Hội <span class="text-[#FB342E] p-0">Nghề Nghiệp</span>
            </p>
            <div
              class="lg:flex lg:justify-end lg:w-[50%] uppercase gap-4 items-center w-full"
            >
              <span class="text-sm text-[#777E90] font-semibold">Xem thêm</span>
              <img src={seeMore} alt="" />
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-2 gap-16">
            <div>
              <img src={opportunity} alt="" class="min-w-full object-cover" />
            </div>

            <div>
              <div class="py-10">
                <img src={Frame} alt="" class="flex flex-col justify-start" />
                <span
                  class="text-[28px] font-medium text-[#212163] flex justify-center items-center text-center"
                >
                  Mỗi con người đều có giá trị và tiềm năng riêng, và chúng tôi
                  cam kết tạo ra một môi trường làm việc thân thiện, động viên
                  sự phát triển cá nhân và đề cao tinh thần đồng đội.
                </span>
                <div class="flex justify-end w-full">
                  <img src={Frame1} alt="" class="center" />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-6 flex-col">
                <div class="bg-white flex flex-col">
                  <u class="text-[13px] p-4 font-normal text-[#FB342E]"
                    >Chuyên Viên/ Nhân Viên</u
                  >

                  <span
                    class="font-semibold text-[18px] px-4 pb-6 text-[#141416]"
                    >[Tuyển dụng 2023] Nhân viên kinh doanh làm việc tại Hà Nội</span
                  >
                  <div class="flex justify-between pb-4">
                    <span>16 / 10 / 2022</span>
                    <img src={Goup} alt="" class="pr-3" />
                  </div>
                </div>

                <div class="bg-white flex flex-col">
                  <u class="text-[13px] p-4 font-normal text-[#FB342E]"
                    >Chuyên Viên/ Nhân Viên</u
                  >

                  <span
                    class="font-semibold text-[18px] px-4 pb-6 text-[#141416]"
                    >[Tuyển dụng 2023] Nhân viên kinh doanh làm việc tại Hà Nội</span
                  >
                  <div class="flex justify-between pb-4">
                    <span>16 / 10 / 2022</span>
                    <img src={Goup} alt="" class="pr-3" />
                  </div>
                </div>
              </div>
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
