<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid, ListOutline, GridOutline } from 'flowbite-svelte-icons';

  let {tableType, setTableType} = $props();
</script>

<ButtonGroup>
  <Button outline color="light" class={tableType === 'table'? 'bg-slate-50':''} onclick={()=>setTableType('table')}>
    <ListOutline class="w-4 h-4 me-2" />
  </Button>
  <Button outline color="light" class={tableType === 'grid'? 'bg-slate-50':''} onclick={()=>setTableType('grid')}>
    <GridOutline class="w-4 h-4 me-2" />
  </Button>
</ButtonGroup>