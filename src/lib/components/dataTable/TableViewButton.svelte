<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid, ListOutline, GridOutline } from 'flowbite-svelte-icons';
</script>

<ButtonGroup>
  <Button outline color="light">
    <ListOutline class="w-4 h-4 me-2" />
  </Button>
  <Button outline color="light">
    <GridOutline class="w-4 h-4 me-2" />
  </Button>
</ButtonGroup>