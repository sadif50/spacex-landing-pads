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

<div class="lg:flex lg:gap-[40px] sm:mx-10 mx-4 sm:my-[50px] my-6">
  <div class="xl:w-8/12 lg:w-3/5 w-full mb-[26px]">
    <DataViewController/>
  </div>
  <div class="xl:w-4/12 lg:w-2/5 w-full">
    <MapView />
    <SuccessRateChart />
  </div>
</div>