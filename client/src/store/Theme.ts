import { writable } from "svelte/store";

let theme = writable<'light' | 'dark'>('light')

export default theme;