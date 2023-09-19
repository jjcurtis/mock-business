<script lang="ts">
  import { onMount } from 'svelte';
  import Item from '../Item.svelte';
  import Page from '../Page.svelte';
  import type IItem from '../../../interfaces/IItem';
  let inventory: IItem[] = [];
  let loading = true;

  onMount(async () => {
    const response = await fetch(
      'http://localhost:4000/inventory'
    );
    const payload = await response.json();
    loading = false;
    inventory = payload;
  });

</script>

<Page classes="grid gap-6 grid-cols-[repeat(auto-fit,minmax(350px,_1fr))]">
  {#if loading}
    <div class="loader place-self-center"></div>
  {/if}
  {#each inventory as item}
    <Item {item }/>
  {/each}
</Page>
