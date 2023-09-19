import { writable } from 'svelte/store';
import { onMount } from 'svelte';

export type User = {
  id: string,
  username: string
}

export default function useUser() {
  let user = writable<User | false>(false);
  let loading = writable(true);
  onMount(async () => {
    const response = await fetch(
      'http://localhost:4000/admin',
      {
        credentials: 'include',
        mode: 'cors',
      }
    );
    const payload = await response.json();
    loading.set(false);
    user.set(payload.user);
  });
  return { user, loading };
}
