<script>
  const { data } = $props();

  import { format} from 'date-fns';
</script>

{#each data.posts as { title, slug, date }}
  <div class="item">
    <a href="/posts/{slug}">{title}</a>
    <small>
      {format(date, 'MMM d, yyy')}
    </small>
  </div>
{/each}
