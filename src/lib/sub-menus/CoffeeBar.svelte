<script>
  import { slide } from 'svelte/transition';
  import Divider from '../components/Divider.svelte';
  import Focus from '../components/Focus.svelte';
  import Heading from '../components/Heading.svelte';
  import Row from '../components/Row.svelte';
  import Table from '../components/Table.svelte';

  import Title from '../components/Title.svelte';

  let open = false;

  const toggle = () => {
    open = !open;
  };
</script>

<Focus>
  <Title on:click={toggle} on:keydown={toggle}>Coffee Bar Menu</Title>

  {#if open}
    <div class="w-full" transition:slide={{ duration: 150 }}>
      <!-- Espresso -->
      <Heading first="single" second="double">Espresso</Heading>

      <Row first="R20" second="R24">Espresso</Row>
      <Row second="R30"
        >Espress Bomb <small>- espresso with one part condensed milk</small
        ></Row
      >
      <Row second="R30"
        >Orange Espresso <small
          >- espresso with freshly squeezed orange juice</small
        >
      </Row>

      <!-- Espresso-Based -->
      <Heading first="single" second="double">Espresso-Based</Heading>

      <Row first="R30" second="R34">Cappuccino</Row>
      <Row second="R32">Flat white</Row>
      <Row second="R26">Cortado</Row>
      <Row second="R26">Americano</Row>
      <Row second="R35">Latte</Row>

      <small class="text-left w-full mt-2">
        Add flavour (Caramel/Hazelnut/Amarula/Chai/Vanilla) - <b
          class="uppercase">R8</b
        >
      </small>

      <!-- Iced Coffee -->
      <Heading second="tall">Iced Coffee</Heading>

      <Row second="R35">Iced Cubed Coffee (Plain)</Row>
      <Row second="R42">Iced Cubed Coffee (Nutella)</Row>
      <Row second="R42"
        >Iced Cubed Coffee <small
          >- salted caramel, hazelnut, vanilla, amarula</small
        ></Row
      >
      <Row second="R46"
        >Blended Cold Coffee <small>- double espresso, honey</small></Row
      >
      <Row second="R35"
        >Affogato <small>- Italian ice-cream with double espresso</small></Row
      >

      <Table
        ><p class="uppercase">Alternative Milks</p>
        <p>Almond milk - R5</p>
        <p>Soya milk - R5</p></Table
      >

      <!-- Hot Drinks -->
      <Heading second="tall">Hot Drinks</Heading>

      <Row second="R45">Hot chocolate</Row>
      <Row second="R45">Spiced chai</Row>

      <!-- Teas -->
      <Heading second="Pot">Teas</Heading>

      <Row second="R35"
        >Home brewed - <small>Ginger lemon honey/mint lemon honey</small></Row
      >
      <Row second="R27">Earlgray</Row>
      <Row second="R27">Camomile</Row>
      <Row second="R27">Peach and apricot</Row>
      <Row second="R25">Rooibos</Row>
      <Row second="R25">Five roses</Row>
    </div>
  {/if}

  <Divider />
</Focus>
