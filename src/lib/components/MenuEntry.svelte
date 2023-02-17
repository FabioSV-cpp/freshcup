<script>
  export let title;
  export let price;

  export let smallPrice = false;
</script>

<section class="grid grid-cols-8 w-full text-xs pt-2 font-cavolini font-bold">
  <div class="col-span-7">
    <p class="uppercase text-base">{title}</p>
    <p class="special-font font-normal"><slot /></p>
  </div>

  <p class="text-center" class:smallPrice>{price}</p>
</section>

<style>
  .special-font {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }

  .smallPrice {
    font-size: 6px;
  }
</style>
