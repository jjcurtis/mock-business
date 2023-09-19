<script lang="ts">
  import { Link } from 'svelte-routing';
  import Page from '../Page.svelte';
  import useUser from '../../store/User';
  let { user } = useUser();
</script>

{#if $user}
  <h2>Logged in as {$user.username}</h2>
  {:else}
  <Page>
    <h2>You have been logged out</h2>
    <Link to='/admin'>Login</Link>
  </Page>
{/if}
