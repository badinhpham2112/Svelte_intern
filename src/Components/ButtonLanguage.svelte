<script>
  import China_flag from "../lib/asset/China_flag.png";
  import En_flag from "../lib/asset/en_GB.png";
  import VN_flag from "../lib/asset/VN_flag.png";
  import Vector from "../lib/asset/Vector.png";
</script>

<div
  class="w-[90px] h-[34px] bg_parent_language flex flex-col justify-center items-center bg-[#F0F3F6] rounded-[200px] relative"
>
  <a href="">
    <span class="flex gap-2 justify-center items-center">
      <img src={VN_flag} alt="" class="w-6 h-6" />
      <p>VIE</p>
      <img src={Vector} alt="" class="w-2 h-2" />
    </span>
  </a>
  <div class="bg-white hidden w-[100px] absolute bg_child_language">
    <span class="flex py-4 px-2 gap-3">
      <img src={VN_flag} alt="" class="w-6 h-6" />
      <p>VIE</p>
    </span>
    <span class="flex py-4 px-2 border-y border-y-[#F0F3F6] gap-3">
      <img src={China_flag} alt="" class="w-6 h-6" />
      <p>CN</p>
    </span>
    <span class="flex py-4 px-2 gap-3">
      <img src={En_flag} alt="" class="w-6 h-6" />
      <p>EN</p>
    </span>
  </div>
</div>

<style>
  .bg_parent_language:hover .bg_child_language {
    display: block;
  }

  .bg_child_language {
    top: 100%;
    left: 0;
    z-index: 10;
    display: none;
  }
</style>
