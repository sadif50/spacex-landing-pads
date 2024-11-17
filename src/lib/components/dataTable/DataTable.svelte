<script>
	import { getContext } from 'svelte';

	const landpads = getContext('landpads');
  console.log(landpads);
</script>

<pre>{landpads}</pre>