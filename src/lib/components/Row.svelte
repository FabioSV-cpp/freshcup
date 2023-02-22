<script>
  export let first = '';
  export let second = '';
</script>

<div class="grid grid-cols-8 w-full text-xs pt-2 font-cavolini font-bold">
  <p class="col-span-6 uppercase text-md"><slot /></p>
  <p class="text-center">{first}</p>
  <p class="text-center">{second}</p>
</div>
