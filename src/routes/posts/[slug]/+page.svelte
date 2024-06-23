<script>
  export let data;
  import { format } from 'date-fns';
</script>

<h1>{data.title}</h1>
<section><small> {format(data.date, 'MMM d')} </small></section>
<section class="markdown-body">
  {@html data.content}
</section>
