<script>
	import { getContext } from 'svelte';
  import GridDataViewItem from './GridDataViewItem.svelte';

	const landpads = getContext('landpads');
</script>

  <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {#each $landpads as landpad, index}
      <GridDataViewItem {landpad} />
    {/each}
  </div>