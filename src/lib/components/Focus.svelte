<script>
  let top;

  const scrollIntoView = () => {
    if (top) {
      setTimeout(() => {
        top.scrollIntoView({ behavior: 'smooth' });
      }, 251);
    }
  };
</script>

<div
  class="w-full flex flex-col items-center"
  on:click={scrollIntoView}
  on:keydown={scrollIntoView}
  bind:this={top}
>
  <slot />
</div>
