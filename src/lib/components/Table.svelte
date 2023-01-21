<script>
  export let normal = false;
</script>

<div
  class="border-1 p-2 pr-6 self-start mt-4 font-cavolini font-semibold shadow-sm w-fit"
  class:normal
>
  <slot />
</div>

<style>
  .normal {
    padding-right: 0.5rem;
  }
</style>
