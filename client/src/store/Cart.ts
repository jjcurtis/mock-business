import { writable } from "svelte/store";
import type IItem from "../../interfaces/IItem";

let cart = writable<IItem[]>([]);

export default cart;