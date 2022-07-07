<script lang="ts">
  import { onMount } from 'svelte';
  import logo from './assets/svelte.png'
  import Auth from './lib/Auth.svelte'
  import near from './utils/near'

  onMount(async() => {
    $near.connect()
  })
</script>


<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Hello Web4!</h1>

  {#if $near.wallet }
    <Auth />
  {/if}

  <h3>
    This is starter template for Svelte.js and Web4 using AssemblyScript.
  </h3>

  <p>
    Look to <a href="https://github.com/anbork/web4-svelte">Web4 Svelte starter</a> and check this out!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
