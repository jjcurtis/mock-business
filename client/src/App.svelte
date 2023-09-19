<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Inventory from './lib/pages/Inventory.svelte';
  import Profile from './lib/pages/Profile.svelte';
  import Home from './lib/pages/Home.svelte';
  import About from './lib/pages/About.svelte';
  import { Router, Route } from 'svelte-routing';
  import Contact from './lib/pages/Contact.svelte';
  import Admin from './lib/pages/Admin.svelte';
  import Cart from './lib/pages/Cart.svelte';
  import Footer from './lib/Footer.svelte';
  import theme from './store/Theme';
</script>

<main class={`${$theme === 'light' ? 'bg-primary-100' : 'bg-primary-950 text-primary-100'} h-screen grid grid-rows-[75px_,_1fr,_75px]`}>
  <Router>
    <Nav />
    <Route path="/" component={Home} />
    <Route path="/inventory" component={Inventory} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/admin" component={Admin} />
    <Route path="/profile" component={Profile} />
    <Route path="/cart" component={Cart} />
    <Footer />
  </Router>
</main>
