<script lang="ts">
  import { onMount } from 'svelte';
  import cart from '../store/Cart';
  import theme from '../store/Theme';
  import type IItem from '../../interfaces/IItem';

  export let item: IItem;

  onMount(() => {
    console.log('On Mount')
    const cartItem = $cart.find(product => product.name === item.name)
    if (cartItem !== undefined) {
      item.quantity = cartItem.quantity
    }
  });

  function handleCartClick(
    e: MouseEvent & {
      currentTarget: HTMLButtonElement;
    }
  ) {
    item.quantity === undefined
      ? (item.quantity = 1)
      : (item.quantity += 1);

    cart.update(items => [...items.filter(product => product !== item), item]);
  }

  function handleMinusClick(
    e: MouseEvent & {
      currentTarget: HTMLButtonElement;
    }
  ) {
    if (item.quantity <= 0) return;
    item.quantity -= 1;
    cart.update(items => [...items.filter(product => product !== item), item]);

  }
</script>

<article
  class={`grid grid-rows-[1fr,3fr,1fr] border p-6 rounded-3xl ${$theme === 'light' ? 'border-primary-800 bg-gradient-to-tl from-primary-200 to-secondary-200 shadow-primary-300 shadow-md' : 'bg-gradient-to-tl from-primary-500 to-transparent'}`}
>
  <h2 class="text-2xl font-semibold">{item.name}</h2>
  <p>${item.price}</p>
  <div class="flex justify-between items-center">
    <p
      class="italic w-fit border p-3 bg-primary-600/75 flex justify-center items-center h-fit text-secondary-300 font-semibold rounded-2xl"
    >
      {item.category}
    </p>
    <div class="relative">
      <button
        class={`border ${$theme === 'light' ? 'bg-secondary-300': 'bg-secondary-500 text-primary-800'}  font-semibold italic p-3 h-fit rounded-2xl transition-all duration-200 hover:outline
        ease-linear hover:outline-2 hover:outline-secondary-100 hover:bg-primary-600 hover:text-secondary-100`}
        on:click={handleCartClick}>Add to Cart</button
      >
      {#if item.quantity !== undefined && item.quantity > 0}
        <button
          class="absolute right-20 -top-7 bg-secondary-300 px-2 rounded-full text-sm font-bold border-primary-800 border hover:bg-red-500"
          on:click={handleMinusClick}
        >
          -
        </button>
        <div
          class="absolute right-11 -top-8 bg-primary-800 text-secondary-400 px-2 rounded-full text-xl"
        >
          {item.quantity}
        </div>
        <button
          class="absolute right-2 -top-7 bg-secondary-300 px-2 rounded-full text-sm font-bold border-primary-800 border hover:bg-green-300" on:click={handleCartClick}
        >
          +
        </button>
      {/if}
    </div>
  </div>
</article>
