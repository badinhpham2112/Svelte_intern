<script>
  import LogoFooter from "../lib/asset/LogoFooter.png";
  import QR_Zalo from "../lib/asset/QR_zalo.png";
  import QR_Line from "../lib/asset/QR_Line.png";
  import QR_Wechat from "../lib/asset/QR_wechat.png";
  import connect_Zalo from "../lib/asset/connect_Zalo.png";
  import connect_Line from "../lib/asset/connect_Line.png";
  import connect_mes from "../lib/asset/connect_Mes.png";
  import connect_face from "../lib/asset/connect_face.svg";
  import connect_youtu from "../lib/asset/connect_youtu.svg";
</script>

<div class="bg-[#212163] py-[68px]">
  <div class="max-w-[1170px] mx-auto lg:flex">
    <div class="text-center min-w-[33%] flex flex-col items-center">
      <img src={LogoFooter} alt="" />
      <span class="text-sm font-normal text-white opacity-70 py-10">
        Copyright © 2023 ENCO. <p>All Rights Reserved.</p>
        <p class="p-0">Thiết kế và phát triển website bởi TechUp</p>
      </span>
    </div>

    <div class="lg:border-l lg:border-l-[#FFF] opacity-30"></div>

    <div class="px-2 lg:pr-14 min-w-[34%] lg:pl-0">
      <div class="px-5">
        <span class="font-semibold text-sm text-white opacity-70">Địa chỉ</span>
        <p class="font-semibold text-sm text-white">
          Lô S1, tầng 10 tòa nhà VIWASEEN, số 48 phố Tố Hữu, phường Trung Văn,
          quận Nam Từ Liêm, thành phố Hà Nội
        </p>
      </div>

      <div class="border border-[#DBDFE4] opacity-30 my-6"></div>
      <div class="px-5">
        <span class="font-semibold text-sm text-white opacity-70">Hotline:</span
        >
        <p class="font-semibold text-sm text-white">(84-4) 3562 7566</p>
      </div>
      <div class="border border-[#DBDFE4] opacity-30 my-6"></div>
      <div class="px-5">
        <span class="font-semibold text-sm text-white opacity-70">Email</span>
        <p class="font-semibold text-sm text-white">sales@enco-industry.com</p>
      </div>
    </div>

    <div class="lg:border-l lg:border-l-[#FFF] opacity-30"></div>

    <div class="py-11 min-w-[33%] lg:py-0">
      <span class="font-semibold text-sm text-white opacity-70 px-8"
        >Quét mã QR để kết nối:</span
      >

      <div class="flex gap-[38px] px-8 py-6">
        <div class="flex flex-col justify-center items-center">
          <img src={QR_Zalo} alt="" />
          <span class="font-semibold text-sm text-white py-3">Zalo</span>
        </div>

        <div class="flex flex-col justify-center items-center">
          <img src={QR_Line} alt="" />
          <span class="font-semibold text-sm text-white py-3">Line</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={QR_Wechat} alt="" />
          <span class="font-semibold text-sm text-white py-3">Wechat</span>
        </div>
      </div>

      <span class="font-semibold text-sm text-white opacity-70 px-8"
        >Kết nối với chúng tôi:</span
      >
      <div class="flex gap-10 lg:gap-5 px-8 py-6">
        <img src={connect_Zalo} alt="" />
        <img src={connect_Line} alt="" />
        <img src={connect_mes} alt="" />
        <img src={connect_face} alt="" />
        <img src={connect_youtu} alt="" />
      </div>
    </div>
  </div>
</div>
