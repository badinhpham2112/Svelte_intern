<script>
  import { onMount, onDestroy } from "svelte";
  import { writable, derived } from "svelte/store";
  import introSlides1 from "../../lib/asset/intro-Slides1.png";
  import introSlides2 from "../../lib/asset/intro_slides2.png";
  import introSlides3 from "../../lib/asset/intro_slides3.png";
  import Mobile_intro from "../../lib/asset/Mobile_intro.png";
  import Mobile_intro2 from "../../lib/asset/Mobile_intro2.png";
  import Logo from "../../lib/asset/Logo.png";
  import LanguageComponents from "../../Components/LanguageComponents.svelte";

  let current = 0;
  let slides = [introSlides1, introSlides2, introSlides3];
  let slidesMobiles = [Mobile_intro, Mobile_intro2, introSlides3];
  let intervalId;

  const checkWindow = typeof window !== "undefined";
  const width = writable(checkWindow ? window.innerWidth : 0);
  const checkScreen = derived(width, ($width) => $width >= 443);
  const checkScreenMobile = derived(width, ($width) => $width < 443);

  const setSlideInterval = () => {
    intervalId = setInterval(() => {
      current = (current + 1) % slides.length;
    }, 7000);
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

  onMount(() => {
    setSlideInterval();
  });

  onDestroy(() => {
    if (checkWindow) {
      window.removeEventListener("resize", updateWidth);
    }
  });

  const goToSlide = (index) => {
    current = index;
  };
</script>

<div class="relative flex-wrap">
  <div class="overflow-hidden max-w-full relative">
    {#if $checkScreen}
      <div
        class="flex transition-transform duration-300 ease-in-out"
        style="transform: translateX(-{current * 100}%)"
      >
        {#each slides as slide, index}
          <img
            src={slide}
            alt="Slide {index}"
            class="object-cover min-h-[100vh]"
          />
        {/each}
      </div>
    {/if}
    {#if $checkScreenMobile}
      <div
        class="flex transition-transform duration-300 ease-in-out"
        style="transform: translateX(-{current * 100}%)"
      >
        {#each slidesMobiles as slidesMobile, index}
          <img
            src={slidesMobile}
            alt="Slide {index}"
            class="object-cover min-h-[100vh]"
          />
        {/each}
      </div>
    {/if}
    <a href="/trang-chu">
      <div
        class="w-[full] h-[full] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <!-- <LanguageComponents /> -->
        <img src={Logo} alt="" class="mb-[66px]" />
        <button
          class="uppercase bg-[#FB342E] py-2 px-5 block mx-auto font-bold text-white focus:outline-none"
          >Đến trang chủ</button
        >
      </div>
    </a>

    <div class="absolute bottom-4 left-0 right-0 flex justify-center z-20">
      {#each slides as slide, index}
        <button
          type="button"
          class="w-10 h-[5px] mx-1 cursor-pointer"
          class:selected={index === current}
          on:click={() => goToSlide(index)}
          aria-label={`Slide ${index + 1}`}
          style="background-color: {index === current ? '#FB342E' : '#666'}"
        ></button>
      {/each}
    </div>
  </div>
</div>
