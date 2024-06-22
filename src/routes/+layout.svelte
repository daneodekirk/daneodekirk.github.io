<script>
  import { navigating } from '$app/stores';
  import '@picocss/pico';
</script>

<header class="container">
  <h1>hi //</h1>
  <section>
    <a href="https://github.com/daneodekirk"> github </a>
    /
    <a href="http://www.linkedin.com/in/daneodekirk"> linkedin </a>

    {#if $navigating && $navigating.to}
      navigating to {$navigating.to.url.pathname}
    {/if}
  </section>
</header>

<main class="container">
  <slot />
</main>
