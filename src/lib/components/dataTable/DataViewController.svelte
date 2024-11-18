<script>
  import DataFilter from "./DataFilter.svelte";
  import DataTable from "./DataTable.svelte";
  import TableViewButton from "./TableViewButton.svelte";

  let tableType = $state('table');
  const setTableType = (type) =>{
    tableType = type;
  }
</script>

<div>
  <div class="flex justify-between mb-[18px]">
    <TableViewButton {tableType} {setTableType} />
    <DataFilter />
  </div>
  {#if tableType === 'table'}
    <DataTable />
  {:else}
    <h1>Grid Table here</h1>
  {/if}
</div>