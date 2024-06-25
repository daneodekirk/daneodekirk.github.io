<script>
  export let data;
  import { format } from 'date-fns';
</script>

<hgroup>
  <h1>{data.title}</h1>
  {#if data.subtitle}<p class="subtitle">{data.subtitle}</p>{/if}
</hgroup>

<section><small> {format(data.date, 'MMM d, yyy')} </small></section>

<section class="markdown-body">
  {@html data.content}
</section>
