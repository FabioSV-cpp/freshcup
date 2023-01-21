<script>
  export let first = '';
  export let second = '';
</script>

<div
  class="grid grid-cols-8 items-center border-1 w-full border-x-0 px-1 uppercase py-1 mt-4 relative"
>
  <h2 class="font-cavolini font-bold absolute text-center w-full">
    <slot />
  </h2>

  <p class="col-span-6" />

  <p class="text-center">{first}</p>
  <p class="text-center">{second}</p>
</div>
