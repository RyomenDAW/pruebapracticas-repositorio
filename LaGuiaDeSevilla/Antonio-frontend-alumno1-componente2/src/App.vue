<template>
  <div class="leads-summary">
    <div class="summary-card total">
      <span class="label">Total</span>
      <span class="count">{{ total }}</span>
    </div>
 
    <div class="divider" />
 
    <div class="summary-card nuevos">
      <span class="label">Nuevos</span>
      <span class="count">{{ nuevos }}</span>
    </div>
 
    <div class="divider" />
 
    <div class="summary-card vendidos">
      <span class="label">Vendidos</span>
      <span class="count">{{ vendidos }}</span>
    </div>
  </div>
</template>
 
<script setup>
import { computed } from 'vue'
 
const props = defineProps({
  leads: {
    type: Array,
    required: true,
    default: () => [],
  },
})
 
const total = computed(() => props.leads.length)
 
const nuevos = computed(
  () => props.leads.filter((lead) => lead.estado === 'nuevo').length
)
 
const vendidos = computed(
  () => props.leads.filter((lead) => lead.estado === 'vendido').length
)
</script>
 
<style scoped>
.leads-summary {
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  font-family: 'Inter', sans-serif;
}
 
.summary-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
}
 
.label {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}
 
.count {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
 
/* Acento de color por tipo */
.nuevos .count  { color: #2563eb; }
.vendidos .count { color: #16a34a; }
 
.divider {
  width: 1px;
  height: 36px;
  background: #e2e8f0;
  flex-shrink: 0;
}
</style>
