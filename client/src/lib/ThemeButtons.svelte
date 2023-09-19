<script lang="ts">
  import theme from '../store/Theme';
</script>

<div class="flex gap-3 justify-center items-center">
  <button
    on:click={() => theme.set('light')}
    aria-label="Theme Button"
    class={`${
      $theme === 'light'
        ? 'outline-white/60 outline transition-[outline] outline-offset-4 rounded-full'
        : undefined
    }`}
  >
    <img src="/light.svg" alt="light" />
  </button>
  <button
    on:click={() => theme.set('dark')}
    aria-label="Theme Button"
    class={`${
      $theme === 'dark'
        ? 'outline-white/60 transition-[outline] outline outline-offset-4 rounded-full'
        : undefined
    }`}
  >
    <img src="/dark.svg" alt="dark" />
  </button>
</div>
