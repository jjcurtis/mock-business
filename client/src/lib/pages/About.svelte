<script lang="ts">
  import { onMount } from "svelte";
  import Page from "../Page.svelte";
  let title: string;
  let loading = true;
  onMount(async () => {
    const response = await fetch(
      'http://localhost:4000/about'
    );
    const payload = await response.json();
    loading = false
    title = payload.title;
  });
</script>
{#if loading}
  <div class="loader"></div>
{/if}
<Page>
  <h1>{title}</h1>
</Page>