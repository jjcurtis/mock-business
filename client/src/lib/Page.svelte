<script lang="ts">
  import theme from "../store/Theme";
  export let classes: string = '';

</script>

<section class={`${classes} ${$theme === 'light' ? 'bg-primary-100' : 'bg-primary-900 text-primary-100'} p-6`}>
  <slot></slot>
</section>