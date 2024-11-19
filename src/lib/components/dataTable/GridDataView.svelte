<script>
	import { getContext } from 'svelte';
  import GridDataViewItem from './GridDataViewItem.svelte';

	const landpads = getContext('landpads');
</script>

  <div class="grid grid-cols-3 gap-4">
    {#each $landpads as landpad, index}
      <GridDataViewItem {landpad} />
    {/each}
  </div>