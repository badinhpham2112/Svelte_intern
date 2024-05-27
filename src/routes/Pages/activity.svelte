<script>
  import activity from "../../lib/asset/activiti.png";
  import img_contractor_activiti from "../../lib/asset/img_contractor_activiti.png";
  import bg_contractor from "../../lib/asset/bg_contractor.svg";
  import "../../tailwindCSS.css";
  import { onMount, onDestroy } from "svelte";
  import { writable, derived } from "svelte/store";
  import worker from "../../lib/asset/worker.svg";
  import project from "../../lib/asset/project.svg";
  import construction from "../../lib/asset/construction.svg";
  import progress from "../../lib/asset/progress.svg";
  import img_promise from "../../lib/asset/img1_promise.png";
  import img_promiseMB from "../../lib/asset/img_promise_MB.png";
  import Frame from "../../lib/asset/Frame.png";
  import Frame1 from "../../lib/asset/Frame1.png";
  import Mask_group from "../../lib/asset/Mask_group.png";
  import Group47427 from "../../lib/asset/Group47427.png";
  import Group47428 from "../../lib/asset/Group47428.png";
  import FooterComponent from "../../Components/FooterComponent.svelte";
  import ButtonScrollTop from "../../Components/ButtonScrollTop.svelte";
  import HeaderComponent from "../../Components/HeaderComponent.svelte";
  export let params;

  const checkWindow = typeof window !== "undefined";
  const width = writable(checkWindow ? window.innerWidth : 0);
  const checkScreen = derived(width, ($width) => $width >= 1024);
  const checkScreenMB = derived(width, ($width) => $width < 1024);

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
</script>

<div class="relative w-full h-full">
  <div class="fixed top-0 left-0 min-w-full bg-white z-20">
    <HeaderComponent />
  </div>

  <div class="mt-[66px]">
    <div class="relative">
      <img src={activity} alt="" class="min-w-full object-cover max-h-full" />
      <div
        class="w-[full] h-[full] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <span
          class="text-base font-semibold
       text-white lg:text-5xl">Lĩnh Vực Hoạt Động</span
        >
      </div>
    </div>

    <div class="flex p-4">
      <span class="text-sm font-medium text-[#777E90]">Trang chủ &gt;</span>
      <span class="text-sm font-medium text-[#777E90]">
        Lĩnh vực hoạt động</span
      >
    </div>

    <div class="min-w-full min-h-full">
      {#if $checkScreenMB}
        <div class="relative">
          <div class="w-full min-h-[958px] bg-[#FB342E]"></div>
          <div class="absolute top-0 left-0 p-5">
            <div>
              <img src={img_contractor_activiti} alt="" class="min-w-full" />
            </div>

            <div class="flex flex-col">
              <span class="text-[90px] py-[30px] text-white font-semibold"
                >01.</span
              >
              <span class="text-[32px] font-semibold text-white"
                >Tổng Thầu Design & Build Xây Dựng & Cơ Điện</span
              >
              <p class="text-white font-normal text-justify py-[30px] text-sm">
                ENCO là một doanh nghiệp xây dựng chuyên cung cấp dịch vụ tổng
                thầu Design & Build Xây dựng & Cơ điện. Tổng thầu Design & Build
                là quá trình thực hiện một dự án xây dựng từ khâu thiết kế đến
                khâu thi công và hoàn thành dự án, với mục đích giảm thiểu thời
                gian và chi phí cho khách hàng. ENCO cung cấp các giải pháp
                thiết kế sáng tạo và hiệu quả, đáp ứng nhu cầu và mong muốn của
                khách hàng. Đồng thời, ENCO cũng đảm bảo chất lượng và tiến độ
                của dự án thông qua việc áp dụng các tiêu chuẩn quốc tế và sử
                dụng các công nghệ và vật liệu hiện đại trong quá trình thi
                công.
              </p>
            </div>
          </div>
        </div>
      {/if}

      {#if $checkScreen}
        <div class="relative min-w-full min-h-full">
          <img src={bg_contractor} alt="" class="min-h-[480px] object-cover" />

          <div class="absolute top-[13%] w-full h-full left-auto">
            <div class="max-w-[1170px] mx-auto flex gap-[30px]">
              <div class="w-1/2">
                <img
                  src={img_contractor_activiti}
                  alt=""
                  class="min-h-[350px] object-cover"
                />
              </div>
              <div class="w-1/2">
                <div class="flex gap-[27px]">
                  <span
                    class="text-[90px] font-semibold p-0 mt-[-23px] text-[#FB342E]"
                    >01.</span
                  >
                  <p class="font-semibold text-[32px] text-[#212163]">
                    Tổng Thầu Design <br /> & Build Xây Dựng <br /> & Cơ Điện
                  </p>
                </div>
                <div
                  class="font-normal text-sm py-[35px] text-justify text-[#353945]"
                >
                  <p>
                    ENCO là một doanh nghiệp xây dựng chuyên cung cấp dịch vụ
                    tổng thầu Design & Build Xây dựng & Cơ điện. Tổng thầu
                    Design & Build là quá trình thực hiện một dự án xây dựng từ
                    khâu thiết kế đến khâu thi công và hoàn thành dự án, với mục
                    đích giảm thiểu thời gian và chi phí cho khách hàng. ENCO
                    cung cấp các giải pháp thiết kế sáng tạo và hiệu quả, đáp
                    ứng nhu cầu và mong muốn của khách hàng. Đồng thời, ENCO
                    cũng đảm bảo chất lượng và tiến độ của dự án thông qua việc
                    áp dụng các tiêu chuẩn quốc tế và sử dụng các công nghệ và
                    vật liệu hiện đại trong quá trình thi công.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <div class="bg-[#212163] py-[70px] min-h-[850px] lg:min-h-[600px] w-full">
      <div class="py-7 lg:flex max-w-[1170px] mx-auto">
        <div class="flex flex-col justify-center items-center">
          <img src={worker} alt="" class="py-[41px]" />
          <p class="font-semibold text-[13px] px-[25px] text-white text-center">
            Đội ngũ chuyên gia có trình độ cao, kinh nghiệm và kiến thức chuyên
            môn vững chắc.
          </p>
        </div>

        <div class="border border-r opacity-30"></div>

        <div class="flex flex-col justify-center items-center">
          <img src={project} alt="" class="py-[41px]" />
          <p class="font-semibold text-[13px] px-[25px] text-white text-center">
            Cam kết mang đến cho khách hàng các giải pháp thiết kế và xây dựng
            hiệu quả, chất lượng và an toàn.
          </p>
        </div>

        <div class="border border-r opacity-30"></div>

        <div class="flex flex-col justify-center items-center">
          <img src={construction} alt="" class="py-[41px]" />
          <p class="font-semibold px-[25px] text-[13px] text-white text-center">
            Cung cấp các giải pháp kỹ thuật tiên tiến để giảm thiểu chi phí và
            tối ưu hóa hiệu quả cho khách hàng.
          </p>
        </div>

        <div class="border border-r opacity-30"></div>

        <div class="flex flex-col justify-center items-center">
          <img src={progress} alt="" class="py-[41px]" />
          <p class="font-semibold px-[25px] text-[13px] text-white text-center">
            Đảm bảo dự án được thực hiện đúng tiến độ và chất lượng
          </p>
        </div>
      </div>
    </div>

    <div
      class="relative py-7 lg:max-w-[1170px] lg:mx-auto lg:py-0 lg:mt-[-150px]"
    >
      {#if $checkScreenMB}
        <img src={img_promiseMB} alt="" class="min-w-full" />
      {/if}

      {#if $checkScreen}
        <img src={img_promise} alt="" class="min-w-full" />
      {/if}
      <div
        class="w-full h-full absolute lg:pl-[72px] lg:w-[500px] top-[20%] lg:top-[10%] px-5"
      >
        <div class="w-full pb-[23px] flex flex-col items-start">
          <img src={Frame} alt="" />
        </div>
        <p
          class="text-xl text-justify lg:text-center font-semibold text-[#212163]"
        >
          ENCO cam kết mang đến cho khách hàng các giải pháp cơ điện tiên tiến
          và hiệu quả, đáp ứng các yêu cầu kỹ thuật và tiêu chuẩn an toàn trong
          quá trình vận hành và sử dụng.
        </p>
        <div class="w-full h-full flex pt-[23px] flex-col items-end">
          <img src={Frame1} alt="" />
        </div>
      </div>
    </div>

    <div class="px-5 lg:px-0 lg:max-w-[1170px] lg:flex lg:pt-[70px] lg:mx-auto">
      <div class="min-w-[50%]">
        <img src={Mask_group} alt="" class="min-w-full" />
      </div>

      <div
        class="font-normal
  lg:flex lg:flex-col lg:justify-center
  lg:items-end text-sm
   min-w-[50%] text-[#353945] text-justify py-7"
      >
        <div class="lg:w-[471px]">
          <p>
            Ngoài ra, ENCO cũng đảm nhiệm vai trò quản lý dự án và giám sát thi
            công để đảm bảo dự án được thực hiện đúng tiến độ và chất lượng. Quá
            trình quản lý dự án của ENCO bao gồm lập kế hoạch, phân công công
            việc, giám sát tiến độ, kiểm tra chất lượng và đưa ra các giải pháp
            giải quyết vấn đề nếu cần thiết.
          </p>
          <p class="py-5">
            Với kinh nghiệm và chuyên môn trong lĩnh vực tổng thầu Design &
            Build Xây dựng & Cơ điện, ENCO cam kết mang đến cho khách hàng các
            giải pháp thiết kế và xây dựng hiệu quả, chất lượng và an toàn.
          </p>
        </div>
      </div>
    </div>

    <div
      class="bg-[#F0F3F6] relative max-w-full lg:min-h-[570px] pb-[70px] lg:pb-0"
    >
      <div class="general_contractor min-w-full"></div>
      <div class="lg:absolute top-0 w-full h-full">
        <div class="max-w-[1170px] lg:flex mx-auto">
          <div class="w-full">
            <div class="px-5 lg:w-[50%] lg:py-[100px]">
              <div class="lg:flex lg:items-center lg:gap-7">
                <span class="text-[90px] pb-[30px] text-[#FB342E] font-semibold"
                  >02.</span
                >
                <span
                  class="text-[32px] flex flex-col font-semibold text-[#212163]"
                  >Tổng Thầu <br />
                  Thi Công Xây Dựng</span
                >
              </div>

              <div class="lg:flex lg:gap-[30px]">
                <p
                  class="text-[#353945] font-normal lg:min-w-[270px] text-justify lg:py-0 py-[30px] text-sm"
                >
                  ENCO là một doanh nghiệp xây dựng chuyên cung cấp dịch vụ Tổng
                  thầu thi công xây dựng, bao gồm quá trình thi công và hoàn
                  thiện các công trình xây dựng. Với đội ngũ chuyên gia và công
                  nhân có kinh nghiệm, ENCO cam kết mang đến cho khách hàng các
                  giải pháp thiết kế và xây dựng chất lượng cao và đáp ứng được
                  các yêu cầu kỹ thuật và tiêu chuẩn an toàn trong quá trình vận
                  hành và sử dụng.
                </p>

                <p
                  class="text-[#353945] font-normal lg:min-w-[270px] text-justify text-sm"
                >
                  Quá trình Tổng thầu thi công xây dựng của ENCO bao gồm các
                  giai đoạn từ khâu lập kế hoạch, thiết kế, mua sắm vật tư, tiến
                  hành thi công, đến khâu bàn giao và nghiệm thu công trình.
                  ENCO cam kết sử dụng các vật liệu và thiết bị chất lượng cao,
                  đảm bảo tiến độ và chất lượng công trình, đồng thời tuân thủ
                  các quy định về bảo vệ môi trường, an toàn lao động và phòng
                  cháy chữa cháy.
                </p>
              </div>
            </div>
            <div class="lg:w-[50%]"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="px-5 py-12 lg:max-w-[1170px] lg:mx-auto lg:grid lg:grid-cols-2 gap-[86px]"
    >
      <div class="pb-16">
        <img src={Group47428} alt="" class="min-w-full" />
      </div>

      <div class="lg:flex lg:flex-col lg:justify-center">
        <p
          class="bg-[#FB342E] text-xl p-[30px] text-justify font-semibold text-white"
        >
          Với kinh nghiệm và chuyên môn trong lĩnh vực Tổng thầu thi công xây
          dựng, ENCO cam kết mang đến cho khách hàng các giải pháp thiết kế và
          xây dựng chất lượng cao, an toàn và hiệu quả.
        </p>
        <p
          class="text-sm font-normal flex flex-col text-[#000] mt-[29px] text-justify"
        >
          ENCO cũng đảm bảo việc quản lý dự án và giám sát thi công để đảm bảo
          dự án được thực hiện đúng tiến độ và chất lượng. Quá trình quản lý dự
          án của ENCO bao gồm lập kế hoạch, phân công công việc, giám sát tiến
          độ, kiểm tra chất lượng và đưa ra các giải pháp giải quyết vấn đề nếu
          cần thiết.<span class="pt-3">
            Bêncạnh đó, ENCO cam kết cung cấp các dịch vụ hậu mãi tốt nhất cho
            khách hàng sau khi công trình hoàn thành, bao gồm bảo trì, sửa chữa
            và nâng cấp
          </span>
          công trình.
        </p>
      </div>
    </div>

    <FooterComponent />
    <ButtonScrollTop />
  </div>
</div>

<style>
  .general_contractor {
    background-image: url(../../lib/asset/Group47427.png);
    background-repeat: no-repeat;
    background-size: 750px 610px;
    background-position: top right;
    padding: 305px 0 !important;
    object-fit: cover;
  }
</style>
