<script lang="ts">
  import Page from '../Page.svelte';
  import cart from '../../store/Cart';
  import theme from '../../store/Theme';

  $: total = $cart.reduce(
    (total, next) => total + (next.price * next.quantity),
    0
  );
</script>

<Page>
  <h2 class="text-center col-span-full text-3xl">
    Shopping Cart
  </h2>
  <div class="flex flex-col gap-6 h-[90%] py-8">
    {#if $cart.length === 0}
      <h3 class="text-center text-2xl">
        There are no items currently in your cart
      </h3>
    {/if}
    {#each $cart as item}
      <article
        class={`flex justify-between items-center gap-2 bg-gradient-to-tr ${$theme === 'light' ? 'from-primary-300 to-secondary-300' : 'from-secondary-600 to-primary-600'} p-4 rounded-lg`}
      >
        <p class="italic font-semibold text-xl">{item.name}</p>
        <p class="flex gap-3">
          ${item.price}
          <span class="bg-secondary-100 px-2 rounded-full"
            >{item.quantity}</span
          >
          ${item.price * item.quantity}
        </p>
      </article>
    {/each}
  </div>
  {#if $cart.length !== 0}
    <div class="text-center text-3xl">
      Total <span class="text-green-500">${total}</span>
    </div>
  {/if}
</Page>
