<script>
  import { Badge, Button, Modal, Progressbar, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { LinkOutline } from "flowbite-svelte-icons";
  const { landpad } = $props();
  let open = $state(false);
</script>
<TableBodyRow>
  <TableBodyCell tdClass="p-4">{landpad.full_name}</TableBodyCell>
  <TableBodyCell tdClass="p-4">{landpad.location.name}</TableBodyCell>
  <TableBodyCell tdClass="p-4">{landpad.location.region}</TableBodyCell>
  <TableBodyCell tdClass="p-4"><Button size="xs" color="light" onclick={()=>open=true}>View Details</Button></TableBodyCell>
  <TableBodyCell tdClass="p-4">
    {#if !isNaN(landpad.successful_landings / landpad.attempted_landings)}
      <Progressbar progress={Math.round((landpad.successful_landings / landpad.attempted_landings) * 100)} progressClass="bg-[#31C48D]" />
      { Math.round((landpad.successful_landings / landpad.attempted_landings) * 100) + "%"}
    {:else}
      {"N/A"}
    {/if}
  </TableBodyCell>
  <TableBodyCell tdClass="p-4"><a href={landpad.wikipedia} target="_blank"><LinkOutline color="#1C64F2" /></a></TableBodyCell>
  <TableBodyCell tdClass="p-4"><Badge color={(landpad.status == 'active') ? 'green' : (landpad.status === 'retired') ? 'red' : 'indigo'}>{landpad.status}</Badge></TableBodyCell>
</TableBodyRow>

<Modal title={`Details - ${landpad.full_name}`} bind:open={open} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{landpad.details}</p>
</Modal>