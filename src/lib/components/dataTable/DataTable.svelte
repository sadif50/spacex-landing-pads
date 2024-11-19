<script>
	import { getContext } from 'svelte';
  import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-svelte';
  import DataTableRow from './DataTableRow.svelte';

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
      <DataTableRow {landpad} />
    {/each}
  </TableBody>
</Table>