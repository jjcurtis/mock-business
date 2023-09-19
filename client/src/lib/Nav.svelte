<script lang="ts">
  import { Link } from 'svelte-routing';
  import cart from '../store/Cart';
  import ThemeButtons from './ThemeButtons.svelte';
  import useUser from '../store/User';
  let {user} = useUser();

  $: cartQuantity = $cart.reduce((total, next) => total + next.quantity, 0)
</script>

<nav
  class="text-xl p-6 flex justify-between items-center bg-gradient-to-l from-primary-400 to-secondary-500"
>
  <h1 class="text-3xl text-primary-900 font-semibold">
    Music Business
  </h1>
  <ul class="flex gap-3 font-semibold text-secondary-100">
    <Link
      class="transition-colors duration-200 hover:text-primary-950"
      to="/"
    >
      Home
    </Link>
    <Link
      class="transition-colors duration-200 hover:text-primary-950"
      to="/inventory"
    >
      Inventory
    </Link>
    <Link
      class="transition-colors duration-200 hover:text-primary-950"
      to="/about"
    >
      About
    </Link>
    <Link
      class="transition-colors duration-200 hover:text-primary-950"
      to="/contact"
    >
      Contact
    </Link>
    {#if !$user}
    <Link
      class="transition-colors duration-200 hover:text-primary-950"
      to="admin"
    >
      Admin
    </Link>
    {:else}
    <Link
    class="transition-colors duration-200 hover:text-primary-950"
    to="profile"
  >
    Profile
  </Link>
    {/if}
    <Link
      class="transition-colors duration-200 hover:text-primary-950 relative"
      to="cart"
    >
      Cart
      {#if cartQuantity > 0}
        <div class="absolute bg-primary-700 text-secondary-200 font-bold -top-4 left-2 rounded-full px-2 text-sm">{cartQuantity}</div>
      {/if}
    </Link>
    <ThemeButtons />
  </ul>
</nav>
