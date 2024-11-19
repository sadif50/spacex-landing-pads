<script>
  import DataViewController from '$lib/components/dataTable/DataViewController.svelte';
  import MapView from '$lib/components/mapView/MapView.svelte';
  import SuccessRateChart from '$lib/components/successRateChart/SuccessRateChart.svelte';
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let { data } = $props();
  setContext('allLandpads', data.landpads);
  const landpads = writable(data.landpads);
  $effect.pre(()=>{
    landpads.set(data.landpads);
  })
  setContext('landpads', landpads);
</script>

<div class="flex gap-[40px] mx-10 my-[50px]">
  <div class="w-8/12">
    <DataViewController/>
  </div>
  <div class="w-4/12">
    <MapView />
    <SuccessRateChart />
  </div>
</div>