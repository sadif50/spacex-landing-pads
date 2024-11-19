<script>
    import { Badge, Button, ButtonGroup, Progressbar } from 'flowbite-svelte';
    import { LinkOutline, MapPinAltOutline } from 'flowbite-svelte-icons';
  const { landpad } = $props();
</script>

<div class="p-8 bg-white drop-shadow rounded-md">
  <h2 class="mb-2 text-center">{landpad.full_name}
    <Badge color={(landpad.status == 'active') ? 'green' : (landpad.status === 'retired') ? 'red' : 'indigo'}>{landpad.status}</Badge>
  </h2>
  <p class="text-sm flex items-center justify-center mb-2"><MapPinAltOutline color="#1C64F2" /> &nbsp;{landpad.location.name},{landpad.location.region}</p>
  <div class="mb-4 mt-6">
    {#if !isNaN(landpad.successful_landings / landpad.attempted_landings)}
      <Progressbar progress={Math.round((landpad.successful_landings / landpad.attempted_landings) * 100)} progressClass="bg-[#31C48D]" />
      <p class="text-center">{ Math.round((landpad.successful_landings / landpad.attempted_landings) * 100) + "% success rate"}</p>
    {:else}
      <p class="text-center text-sm">Success rate not available</p>
    {/if}
  </div>

  <div class="flex justify-center">
    <ButtonGroup>
      <Button size="xs" color="light">View Details</Button>
      <Button size="xs" color="light" target="_blank" href={landpad.wikipedia}><LinkOutline color="#1C64F2"/>&nbsp;wikipedia</Button>
    </ButtonGroup>
  </div>
</div>