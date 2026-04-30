<script setup>
import EstadoBadge from './components/EstadoBadge.vue'
</script>

<template>
  <div class="app">
    <h1>EstadoBadge Demo</h1>
    <div class="badges">
      <EstadoBadge estado="nuevo" />
      <EstadoBadge estado="contactado" />
      <EstadoBadge estado="en_proceso" />
      <EstadoBadge estado="vendido" />
      <EstadoBadge estado="perdido" />
    </div>
    <div class="badges">
      <EstadoBadge estado="nuevo" />
      <EstadoBadge estado="contactado" />
      <EstadoBadge estado="en_proceso" />
      <EstadoBadge estado="vendido" />
      <EstadoBadge estado="perdido" />
    </div>
    <div class="badges">
      <EstadoBadge estado="nuevo" />
      <EstadoBadge estado="contactado" />
      <EstadoBadge estado="en_proceso" />
      <EstadoBadge estado="vendido" />
      <EstadoBadge estado="perdido" />
    </div>
    <div class="badges">
      <EstadoBadge estado="nuevo" />
      <EstadoBadge estado="contactado" />
      <EstadoBadge estado="en_proceso" />
      <EstadoBadge estado="vendido" />
      <EstadoBadge estado="perdido" />
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 2rem;
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
