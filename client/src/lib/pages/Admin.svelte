<script lang="ts">
  import Page from '../Page.svelte';
  import useUser from '../../store/User';
  let {user, loading} = useUser()
</script>

<Page>
  {#if !$loading}
    {#if !$user}
      <h1 class="text-3xl text-center">Admin</h1>
      <form
        action="http://localhost:4000/admin"
        method="post"
        class="flex flex-col gap-3 text-lg text-primary-900 mx-auto w-3/4 sm:w-1/2 bg-primary-200 p-6 m-6 rounded-lg"
      >
        <h2 class="text-center text-2xl">Sign In</h2>
        <label for="username">Username</label>
        <input
          class="px-2"
          type="text"
          name="username"
          id="username"
        />
        <label for="password">Password</label>
        <input
          class="px-2"
          type="password"
          name="password"
          id="password"
        />
        <input
          type="submit"
          value="Login"
          class="w-fit px-4 border border-primary-700 bg-secondary-400 rounded-lg"
        />
      </form>
    {/if}
  {/if}
</Page>
