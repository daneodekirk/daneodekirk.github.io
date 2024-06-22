<script>
  export let data;
</script>

<ul>
  {#each data.posts as { title, slug, date }}
    <li>
      <a href="/posts/{slug}">{title}</a>
      <span>{date}</span>
    </li>
  {/each}
</ul>
