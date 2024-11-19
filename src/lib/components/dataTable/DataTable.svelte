<script>
	import { getContext } from 'svelte';
  import { Badge, Button, Progressbar, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import {LinkOutline} from 'flowbite-svelte-icons'

	const landpads = getContext('landpads');
</script>

<Table hoverable={true} shadow>
  <TableHead>
    <TableHeadCell padding="p-4">FULL NAME</TableHeadCell>
    <TableHeadCell padding="p-4">LOCATION NAME</TableHeadCell>
    <TableHeadCell padding="p-4">REGION</TableHeadCell>
    <TableHeadCell padding="p-4">DETAILS</TableHeadCell>
    <TableHeadCell padding="p-4">SUCCESS RATE</TableHeadCell>
    <TableHeadCell padding="p-4">WIKIPEDIA LINK</TableHeadCell>
    <TableHeadCell padding="p-4">STATUS</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each $landpads as landpad, index}
      <TableBodyRow>
        <TableBodyCell tdClass="p-4">{landpad.full_name}</TableBodyCell>
        <TableBodyCell tdClass="p-4">{landpad.location.name}</TableBodyCell>
        <TableBodyCell tdClass="p-4">{landpad.location.region}</TableBodyCell>
        <TableBodyCell tdClass="p-4"><Button size="xs" color="light">View Details</Button></TableBodyCell>
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
    {/each}
  </TableBody>
</Table>