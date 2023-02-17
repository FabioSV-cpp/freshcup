<script>
  import { select_option } from 'svelte/internal';
  import { slide } from 'svelte/transition';
  import Focus from '../components/Focus.svelte';
  import Heading from '../components/Heading.svelte';
  import ListEntry from '../components/ListEntry.svelte';
  import MenuEntry from '../components/MenuEntry.svelte';
  import MenuList from '../components/MenuList.svelte';
  import Table from '../components/Table.svelte';
  import Title from '../components/Title.svelte';

  let open = false;

  const toggle = () => {
    open = !open;
  };
</script>

<Focus>
  <Title on:click={toggle} on:keydown={toggle}>Food Menu</Title>

  {#if open}
    <div transition:slide={{ duration: 150 }}>
      <Heading second="price">Kitchen opens from 8am to 4:30pm</Heading>

      <MenuEntry title="Continental Omelette" price="R85">
        With chorizo, mozzarella cheese, caramelised onions, peppers and spinach
      </MenuEntry>

      <MenuEntry title="Mediterranean Breakfast" price="R75">
        Two eggs, chorizo, avo, spinach with a slice of toasted rye bread
      </MenuEntry>

      <MenuEntry title="Halloumi Toast" price="R70">
        Two slices of toasted rye bread topped with baby spinach, avo and
        grilled halloumi drizzled with a homemade sweet chilli sauce
      </MenuEntry>

      <MenuEntry title="Cooked Rolled Oats" price="R60">
        Topped with mixed nuts and seasonal fruits tied in with an orange sauce
      </MenuEntry>

      <MenuEntry title="Muesli Breakfast" price="R60">
        A bowl of homemade muesli, greek yoghurt and seasonal fruits
      </MenuEntry>

      <MenuEntry title="Plain French Toast" price="R45">
        Plain french toast served with cinnamon/sugar
      </MenuEntry>

      <MenuEntry title="Loaded French Toast" price="R65">
        Topped with grilled banana slices and served with local orange blossom
        honey
      </MenuEntry>

      <MenuList title="Traditional Pancakes">
        <ListEntry price="R45">
          1. Plain pancakes with the cinnamon and sugar
        </ListEntry>

        <ListEntry price="R65"
          >2. Topped with roasted nuts and nutella</ListEntry
        >

        <ListEntry price="R65">3. Ice cream and roasted nuts</ListEntry>
      </MenuList>

      <MenuList title="POKÉ BOWL">
        <ListEntry price="R80">
          1. Grilled chicken, couscous, cherry tomatoes, chickpeas, cucumber,
          spring onions, spinach and drizzled with a balsamic reduction
        </ListEntry>

        <ListEntry price="R80">
          2. Halloumi, couscous, pineapple, chickpeas, cucumber, spring onions,
          spinach and drizzled with a balsamic reduction
        </ListEntry>
      </MenuList>

      <MenuList title="Homemade Style Burger">
        <ListEntry price="R90">
          Lean beef burger patty, cheese, tomato, lettuce, caramelised onion
          drizzled with a sweet honey mustard sauce
        </ListEntry>
      </MenuList>

      <MenuList title="Pita Pockets or Wraps">
        <ListEntry price="R80">
          1. Grilled chicken strips, caramelised onions and red peppers, cucumber, feta cheese and lettuce
        </ListEntry>

        <ListEntry price="R70">
          2. Grilled chorico, caramelised onions and red peppers, cucumber and lettuce
        </ListEntry>

        <ListEntry price="R80">
          3. Halloumi cheese, caramelised onions and red peppers, cucumber and lettuce with a sweet chilli sauce
        </ListEntry>
      </MenuList>

      <div class="mt-4" />
      <MenuList title="Choose ingredients & make your own" />

      <div class="flex gap-x-4 w-full">
        <Table normal>
          <p>Vegetables</p>

          <div class="grid grid-cols-2 gap-x-4">
            <small>Red peppers</small>
            <small>R15</small>

            <small>Onions</small>
            <small>R8</small>

            <small>Spinach</small>
            <small>R8</small>

            <small>Tomatoes</small>
            <small>R10</small>

            <small>Lettuce</small>
            <small>R10</small>

            <small>Avo</small>
            <small>R20</small>

            <small>Cucumber</small>
            <small>R10</small>
          </div>
        </Table>

        <Table normal>
          <p>Bread</p>

          <div class="grid grid-cols-2 gap-x-4">
            <small>Rye</small>
            <small>R15</small>

            <small>Ciabatta</small>
            <small>R10</small>

            <small>Portuguese roll</small>
            <small>R10</small>

            <small>Pita bread</small>
            <small>R12</small>
          </div>
        </Table>

        <Table normal>
          <p>Protein</p>

          <div class="grid grid-cols-2 gap-x-4">
            <small>Chorizo</small>
            <small>R25</small>

            <small>Chicken</small>
            <small>R25</small>

            <small>Egg</small>
            <small>R10</small>

            <small>Halloumi</small>
            <small>R20</small>

            <small>Mozzarella</small>
            <small>R15</small>

            <small>Bacon</small>
            <small>R30</small>
          </div>
        </Table>
      </div>
    </div>
  {/if}

  <div class="pt-4" />
</Focus>

<style>
  div > small:nth-child(2n + 1) {
    width: max-content;
  }

  div > small:nth-child(2n) {
    padding-right: 1rem;
    text-align: right;
    text-transform: capitalize;
  }
</style>
