<script>
  import Top from "../lib/asset/scrollTop.png";
  export let buttonVisibleOnPX = 200;
  let hidden = true;

  const goStart = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };

  const scrollElement = () => {
    return document.documentElement || document.body;
  };

  const handleOnScroll = () => {
    if (scrollElement().scrollTop > buttonVisibleOnPX) {
      hidden = false;
    } else {
      hidden = true;
    }
  };
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
  class="opacity-100 z-[99] fixed right-5 bottom-5 p-1 transition-opacity duration-500"
  on:click={goStart}
  class:hidden
>
  <img src={Top} alt="Scroll to top" />
</button>

<style>
  .hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
