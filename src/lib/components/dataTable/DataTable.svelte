<script>
	import { getContext } from 'svelte';
  import { Button, Progressbar, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import {LinkOutline} from 'flowbite-svelte-icons'

	const landpads = getContext('landpads');
  console.log($landpads);
</script>

<Table hoverable={true}>
  <TableHead>
    <TableHeadCell>FULL NAME</TableHeadCell>
    <TableHeadCell>LOCATION NAME</TableHeadCell>
    <TableHeadCell>REGION</TableHeadCell>
    <TableHeadCell>DETAILS</TableHeadCell>
    <TableHeadCell>SUCCESS RATE</TableHeadCell>
    <TableHeadCell>WIKIPEDIA LINK</TableHeadCell>
    <TableHeadCell>STATUS</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each $landpads as landpad, index}
      <TableBodyRow>
        <TableBodyCell>{landpad.full_name}</TableBodyCell>
        <TableBodyCell>{landpad.location.name}</TableBodyCell>
        <TableBodyCell>{landpad.location.region}</TableBodyCell>
        <TableBodyCell><Button>See Details</Button></TableBodyCell>
        <TableBodyCell>
          <Progressbar progress={(landpad.successful_landings / landpad.attempted_landings) * 100} color="green" />
          {parseInt((landpad.successful_landings / landpad.attempted_landings) * 100)}
        </TableBodyCell>
        <TableBodyCell><a href={landpad.wikipedia}><LinkOutline /></a></TableBodyCell>
        <TableBodyCell>{landpad.status}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>