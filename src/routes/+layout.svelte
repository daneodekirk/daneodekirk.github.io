<svelte:options runes={true} />

<script>
  import { page } from '$app/stores';
  import '../app.scss';

  let { children } = $props();

  let homepage = $state(true);
  $effect(() => (homepage = $page.url.pathname === '/'));
</script>

<header class="container" class:homepage>
  <h1><a class="home" href="/">hi //</a></h1>
  <section>
    <a href="https://github.com/daneodekirk"> github </a>
    /
    <a href="http://www.linkedin.com/in/daneodekirk"> linkedin </a>
  </section>
</header>

<main class="container">
  {@render children()}
</main>
