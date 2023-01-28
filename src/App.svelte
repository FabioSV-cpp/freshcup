<script>
  import CoffeeBar from './lib/sub-menus/CoffeeBar.svelte';
  import Drinks from './lib/sub-menus/Drinks.svelte';
  import FoodMenu from './lib/sub-menus/FoodMenu.svelte';

  import freshCup from './assets/freshcup.png';
  import insta from './assets/instagram.svg';
  import facebook from './assets/facebook.svg';
</script>

<main
  class="bg-slate-100 flex flex-col justify-around items-center min-h-screen"
>
  <header class='w-full flex justify-center my-auto'>
    <img src={freshCup} alt="svelte" class="h-40 mt-4" />
  </header>

  <article
    class="flex flex-col items-center justify-center py-4 px-2 text-black max-w-lg w-full mb-auto"
  >
    <CoffeeBar />
    <Drinks />
    <FoodMenu />
  </article>

  <footer class='flex items-center gap-x-1 w-full justify-center h-12 mt-auto mb-4'>
    <a href="https://www.instagram.com/fresh.cup.coffee"><img src={insta} alt='instagram' class='h-8'/></a>
    <a href="https://www.facebook.com/people/Fresh-Cup/100088574150346"><img src={facebook} alt='facebook' class='h-10'></a>
  </footer>
</main>
