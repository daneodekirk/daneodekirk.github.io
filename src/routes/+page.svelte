<script>
  export let data;
</script>

{#each data.posts as { title, slug, date }}
  <div class="item">
    <a href="/posts/{slug}">{title}</a>
    <small>{date}</small>
  </div>
{/each}
