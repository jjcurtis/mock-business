<script lang="ts">
  import { onMount } from 'svelte';
  import Page from '../Page.svelte';

  let title: string = 'Loading...';

  onMount(async () => {
    const response = await fetch('http://localhost:4000');
    const payload = await response.json();
    title = payload.title;
    
  });
</script>

  <Page>
    <h1>{title}</h1>
  </Page>
