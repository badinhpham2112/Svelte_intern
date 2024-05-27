<script>
  import Logo from "../lib/asset/LogoENCO.png";
  import search from "../lib/asset/Search.svg";
  import ButtonLanguage from "./ButtonLanguage.svelte";
  import arrow_left from "../lib/asset/arrow_left.png";
  import Accomplished from "../lib/asset/Accomplished.png";
  import carried from "../lib/asset/carried.png";
</script>

<div
  class="border-t border-t-[#FB342E] max-w-[1170px] h-[70px] mx-auto bg-white"
>
  <div class="lg:flex px-[11px] lg:justify-between lg:items-center">
    <div class="flex justify-between items-center">
      <div>
        <img src={Logo} alt="" class="mx-auto py-1" />
      </div>

      <label for="nav_mobile_input" class="w-8 h-8 ml-auto block lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
          ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"
          /></svg
        >
      </label>
    </div>

    <div class="lg:block hidden">
      <ul class="flex items-center">
        <li class="float-left">
          <a
            href="/trang-chu"
            class="text-sm cursor-pointer inline-block py-[25px] px-2 font-semibold {window
              .location.pathname === '/trang-chu'
              ? 'bg-[#FB342E] text-white'
              : ''}"
          >
            Trang Chủ
          </a>
        </li>
        <li class="float-left relative group">
          <a
            href="/ve-chung-toi"
            class="text-sm inline-block py-[25px] px-2 font-semibold {window
              .location.pathname === '/ve-chung-toi'
              ? 'bg-[#FB342E] text-white'
              : ''}"
          >
            Về Chúng Tôi
          </a>

          <div
            class="w-full left-0 mt-[-1px] hidden group-hover:block fixed bg-[#F0F3F6]"
          >
            <ul
              class="flex justify-center py-[17px] gap-[30px] items-center flex-wrap"
            >
              <li class="text-[13px] font-semibold text-[#777E90]">
                Giới Thiệu
              </li>
              <li class="text-[13px] font-semibold text-[#777E90]">
                Thông điệp
              </li>
              <li class="text-[13px] font-semibold text-[#777E90]">
                Master Builder
              </li>
              <li class="text-[13px] font-semibold text-[#777E90]">Lịch Sử</li>
              <li class="text-[13px] font-semibold text-[#777E90]">
                Tầm Nhìn - Sứ Mệnh
              </li>
              <li class="text-[13px] font-semibold text-[#777E90]">
                Đội ngũ kỹ sư
              </li>
              <li class="text-[13px] font-semibold text-[#777E90]">
                Chứng Nhận
              </li>
              <li class="text-[13px] font-semibold text-[#777E90]">
                Khách Hàng - Đối Tác
              </li>
            </ul>
          </div>
        </li>
        <li class="float-left">
          <a
            href="/linh-vuc-hoat-dong"
            class="text-sm inline-block py-[25px] px-2 font-semibold {window
              .location.pathname === '/linh-vuc-hoat-dong'
              ? 'bg-[#FB342E] text-white'
              : ''}"
          >
            Lĩnh vực hoạt động
          </a>
        </li>
        <li class=" float-left relative group">
          <a
            href=""
            class="text-sm inline-block py-[25px] px-2 font-semibold text-[#141416]"
            >Dự Án</a
          >

          <div
            class="w-full left-0 mt-[-1px] hidden group-hover:block fixed bg-[#F0F3F6]"
          >
            <div class="max-w-[1170px] flex gap-[30px] py-[53px] mx-auto">
              <div class="relative">
                <img src={carried} alt="" class="max-h-[330px]" />
                <div class="absolute top-0 left-0">
                  <p
                    class="text-[#FFF] mt-[35px] ml-[42px] font-semibold text-[32px]"
                  >
                    Dự Án<br /> Đang Thực Hiện
                  </p>
                </div>
                <div
                  class="w-[50px] flex flex-col items-center absolute bottom-0 right-0 justify-center min-h-[50px] bg-[#FB342E]"
                >
                  <img src={arrow_left} alt="" />
                </div>
              </div>

              <div class="relative">
                <img src={Accomplished} alt="" class="max-h-[330px]" />
                <div class="absolute top-0 left-0">
                  <p
                    class="text-[#FFF] mt-[35px] ml-[42px] font-semibold text-[32px]"
                  >
                    Dự Án<br /> Đã hoàn thành
                  </p>
                </div>
                <div
                  class="w-[50px] flex flex-col items-center absolute bottom-0 right-0 justify-center min-h-[50px] bg-[#FB342E]"
                >
                  <img src={arrow_left} alt="" />
                </div>
              </div>
            </div>
            <!-- <ul
              class="flex justify-center py-[17px] gap-4 items-center flex-wrap"
            >
              <li>Giới Thiệu</li>
              <li>Thông điệp</li>
              <li>Master Builder</li>
              <li>Lịch Sử</li>
              <li>Tầm Nhìn - Sứ Mệnh</li>
              <li>Đội ngũ kỹ sư</li>
              <li>Chứng Nhận</li>
              <li>Khách Hàng - Đối Tác</li>
            </ul> -->
          </div>
        </li>
        <li class="float-left">
          <a
            href=""
            class="text-sm inline-block py-[25px] px-2 font-semibold text-[#141416]"
            >Tin Tức</a
          >
        </li>
        <li class="float-left">
          <a
            href=""
            class="text-sm inline-block py-[25px] px-2 font-semibold text-[#141416]"
            >Cơ Hội Nghề Nhiệp</a
          >
        </li>
        <li class="float-left">
          <a
            href=""
            class="text-sm inline-block py-[25px] px-2 font-semibold text-[#141416]"
            >Liên Hệ</a
          >
        </li>
        <img src={search} alt="" class="pr-6 pl-2" />
        <ButtonLanguage />
      </ul>
    </div>

    <input type="checkbox" id="nav_mobile_input" class="nav_input hidden" />

    <label
      for="nav_mobile_input"
      class="fixed top-0 right-0 bottom-0 left-0 bg-black-30 hidden z-40 nav_overlay"
    ></label>

    <div
      class="nav_mobile fixed top-0 right-0 bottom-0 w-[320px] max-w-full bg-white z-50 opacity-30 transform translate-x-full"
    >
      <label
        for="nav_mobile_input"
        class="min-w-5 min-h-5 absolute top-4 right-4 opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
          ><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
            d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"
          /></svg
        >
      </label>
      <ul class="mt-16">
        <li>
          <a
            href="/trang-chu"
            class="text-sm hover:bg-[#FB342E] font-semibold text-[#141416] pl-5 py-4 block"
          >
            Trang chủ</a
          >
        </li>
        <li>
          <a
            href="/ve-chung-toi"
            class="text-sm font-semibold hover:bg-[#FB342E] text-[#141416] pl-5 py-4 block"
            >về chúng tôi</a
          >
        </li>
        <li>
          <a
            href="/linh-vuc-hoat-dong"
            class="text-sm font-semibold hover:bg-[#FB342E] text-[#141416] pl-5 py-4 block"
            >Lĩnh vực hoạt động</a
          >
        </li>
        <li class="text-sm font-semibold text-[#141416] pl-5 py-4 block">
          Dự Án
        </li>
        <li class="text-sm font-semibold text-[#141416] pl-5 py-4 block">
          Tin Tức
        </li>
        <li class="text-sm font-semibold text-[#141416] pl-5 py-4 block">
          Cơ Hội Nghề Nhiệp
        </li>
        <li class="text-sm font-semibold text-[#141416] pl-5 py-4 block">
          Liên Hệ
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
  li a:hover {
    background-color: #fb342e;
    color: white;
  }
  .nav_overlay {
    animation: fedeIn linear 0.2s;
  }
  .nav_mobile {
    transition:
      transform linear 0.2s,
      opacity linear 0.2s;
    opacity: 0;
  }
  .nav_input:checked ~ .nav_overlay {
    display: block;
  }

  .nav_input:checked ~ .nav_mobile {
    transform: translateX(0%);
    opacity: 1;
  }
  @keyframes fedeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
