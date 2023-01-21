<script>
  import { slide } from 'svelte/transition';
  import Divider from '../components/Divider.svelte';
  import Focus from '../components/Focus.svelte';
  import Heading from '../components/Heading.svelte';
  import MenuEntry from '../components/MenuEntry.svelte';
  import Table from '../components/Table.svelte';
  import Title from '../components/Title.svelte';

  let open = false;

  const toggle = () => {
    open = !open;
  };
</script>

<Focus>
  <Title on:click={toggle} on:keydown={toggle}>Drinks Menu</Title>

  {#if open}
    <div transition:slide={{ duration: 150 }}>
      <!-- Recommended Smoothies -->
      <Heading second="price">Recommended Smoothies</Heading>

      <MenuEntry title="Purple Cup" price="R62">
        Frozen blueberries, frozen banana, cucumber, celery, beetroot, almond
        butter, full cream milk
      </MenuEntry>

      <MenuEntry title="Green Cup" price="R62">
        Apple, pineapple, ginger, spinach, celery, cucumber, dates, full cream
        milk
      </MenuEntry>

      <MenuEntry title="Yellow Cup" price="R62">
        Frozen mango, pineapple, frozen banana, turmeric, yoghurt, full cream
        milk
      </MenuEntry>

      <MenuEntry title="Off-White Cup" price="R62">
        Frozen banana, frozen pineapple, vanilla, peanut butter, full cream milk
      </MenuEntry>

      <MenuEntry title="Red Cup" price="R62">
        Mixed berries, frozen blueberries, frozen mango, almond butter, honey,
        chia seeds, yoghurt, full cream milk
      </MenuEntry>

      <MenuEntry title="Sunrise Cup" price="R62">
        Frozen pineapple, fresh mint, vanilla, coconut milk, crushed ice
      </MenuEntry>

      <MenuEntry title="Blue Cup" price="R62">
        Frozen blueberries, frozen banana, mango, honey, almond milk, crushed
        ice
      </MenuEntry>

      <MenuEntry title="Orange Cup" price="R62">
        Frozen mango, orange juice, frozen pineapple, crushed ice, almond
        butter, fresh carrot, full cream milk
      </MenuEntry>

      <Table>
        <p>Make your own</p>
        <small>(With the above ingredients feel free to mix and match)</small>

        <p class="mt-2">Each beverage requires a base</p>
        <small>Almond milk, coconut milk, soya milk</small>

        <p class="mt-2">Add protein powder 1 scoop - R12</p>
      </Table>

      <!-- Juices -->
      <Heading second="price">Juices</Heading>

      <MenuEntry title="Daily Juices" price="R45" />

      <MenuEntry title="Fresh Fruits" price="R45">
        Orange, pineapple, lemon, apple, mango when available
      </MenuEntry>

      <MenuEntry title="Fresh Vegetables" price="R45">
        Spinach, celery, cucumber, carrots, beetroot, ginger, mint
      </MenuEntry>

      <MenuEntry title="Fruit Shots" price="R45">
        Ginger, lemon, orange, honey
      </MenuEntry>

      <MenuEntry
        title="Freshly Squeezed Bottled Juices"
        price="Price on request"
        smallPrice
      >
        Available daily to take home (Just ask the barista)
      </MenuEntry>

      <Heading second="price">Milkshakes</Heading>

      <MenuEntry title="Strawberry" price="R42" />
      <MenuEntry title="Chocolate" price="R42" />
      <MenuEntry title="Vanilla" price="R42" />
    </div>
  {/if}

  <Divider />
</Focus>
