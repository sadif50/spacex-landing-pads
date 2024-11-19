<script>
  import { Button, Dropdown, DropdownItem, Radio, Helper } from 'flowbite-svelte';
  import { AdjustmentsVerticalSolid, ChevronDownOutline } from 'flowbite-svelte-icons';
  import { getContext } from 'svelte';
  let status = $state('');
  const allLandPads = getContext('allLandpads');
  let landpads = getContext('landpads');
  $effect(()=>{
    if(status){
      const filteredLandpads = allLandPads.filter(l => l.status === status);
      $landpads = filteredLandpads;
    }
  })
</script>

<Button size="xs" color="light" class="py-2 px-4 text-[#1C64F2]"><AdjustmentsVerticalSolid /> &nbsp;&nbsp; Filter By Status<ChevronDownOutline class="w-6 h-6 ms-2 text-[]" /></Button>
<Dropdown class="w-60 p-3 space-y-1">
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio color="#1C64F2" name="status" bind:group={status} value='active'>Active</Radio>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio color="#1C64F2" name="status" bind:group={status} value='retired'>Retired</Radio>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio color="#1C64F2" name="status" bind:group={status} value='under construction'>Under Construction</Radio>
  </li>
</Dropdown>