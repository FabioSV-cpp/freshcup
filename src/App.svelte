<script>
  import CoffeeBar from './lib/sub-menus/CoffeeBar.svelte';
  import Drinks from './lib/sub-menus/Drinks.svelte';
  import FoodMenu from './lib/sub-menus/FoodMenu.svelte';
  import svelteLogo from './assets/svelte.svg';
</script>

<main
  class="bg-slate-100 flex flex-col justify-center items-center min-h-screen "
>
  <img src={svelteLogo} alt="svelte" class="h-36 mt-4" />

  <article
    class="flex flex-col items-center justify-center py-4 px-2 text-black max-w-lg w-full flex-grow-[0.4]"
  >
    <CoffeeBar />
    <Drinks />
    <FoodMenu />
  </article>
</main>
