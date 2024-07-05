<svelte:head>
  <title>{$page.data.title || 'dane odekirk'}</title>

  <script>
    window.goatcounter = { no_onload : true }
  </script>

  <script data-goatcounter="https://trip.daneodekirk.com/count"
      src="//trip.daneodekirk.com/count.js"></script>
</svelte:head>

<script>
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import '../app.scss';
  import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';

  let { children } = $props();

  let homepage = $state(true);
  $effect(() => { homepage = $page.url.pathname === '/' });

  afterNavigate( () => { window.goatcounter.count() })
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

<ThemeSwitcher />
