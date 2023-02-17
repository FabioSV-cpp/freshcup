<script>
  export let title;
</script>

<section class="grid grid-cols-8 w-full text-xs pt-2 font-cavolini font-bold">
  <p class="col-span-7 uppercase text-base">{title}</p>
</section>

<slot />
