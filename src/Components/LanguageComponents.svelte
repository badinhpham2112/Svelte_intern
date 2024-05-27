<script>
  import nation_icon_VN from "../lib/asset/nation_icon_VN.png";
  import nation_icon_CN from "../lib/asset/nation_icon_CN.png";
  import nation_icon_EN from "../lib/asset/nation_icon_EN.png";

  let nations = [
    { id: "1", value: [nation_icon_VN, "vi"] },
    { id: "2", value: [nation_icon_CN, "cn"] },
    { id: "3", value: [nation_icon_EN, "en"] },
  ];

  let selected_id = "1";
</script>

<select
  bind:value={selected_id}
  class="w-[90px] h-[34px] focus: outline-none rounded-3xl bg-[#F0F3F6] grid place-items-center"
>
  {#each nations as nation}
    <option value={nation.id}>
      <li class="flex justify-center items-center gap-1 hover: bg-white">
        <!-- <div class="w-6 h-6"> -->

        <!-- </div> -->
        <img src={nation.value[0]} alt="" class="w-6 h-6" />
        <p class="uppercase font-bold text-sm text-[#141416]">
          {nation.value[1]}
        </p>
      </li>
    </option>
  {/each}
</select>
