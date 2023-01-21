<script>
  export let price;
</script>

<section class="grid grid-cols-8 w-full text-xs pt-2 font-cavolini font-bold">
  <p class="col-span-7 special-font font-normal"><slot /></p>
  <p class="text-center">{price}</p>
</section>

<style>
  .special-font {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
</style>
