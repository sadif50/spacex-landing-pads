<script>
  import DataFilter from "./DataFilter.svelte";
import DataTable from "./DataTable.svelte";
  import TableViewButton from "./TableViewButton.svelte";
</script>

<div>
  <div class="flex justify-between mb-[18px]">
    <TableViewButton />
    <DataFilter />
  </div>
  <DataTable />
</div>