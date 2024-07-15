
<script lang="ts">
    import {Navbar, NavBrand, Button, NavHamburger, NavUl, NavLi} from "flowbite-svelte";
    export let activeTab = 'dashboard';
</script>
<Navbar>
    <NavBrand href="/">
      <img src="/logo.png" class="me-3 h-6 sm:h-9" alt="Sport Manager Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Sport Manager </span>
    </NavBrand>
    <div class="flex md:order-2">
      <Button size="sm">Get started</Button>
      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi href="/" active={activeTab == 'dashboard'}>Dashboard</NavLi>
      <NavLi href="/competitions" active={activeTab == 'competitions'}>Competitions</NavLi>
      <NavLi href="/">Navbar</NavLi>
      <NavLi href="/">Pricing</NavLi>
      <NavLi href="/">Contact</NavLi>
    </NavUl>
  </Navbar>