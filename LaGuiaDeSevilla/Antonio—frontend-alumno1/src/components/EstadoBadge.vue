<template>
  <span :class="['badge', `badge--${config.theme}`]" :aria-label="`Estado: ${config.label}`">
    <span class="badge__dot" aria-hidden="true" />
    {{ config.label }}
  </span>
</template>

<script setup>
import { computed } from 'vue'



const props = defineProps({
  estado: {
    type: String,
    required: true,
    validator: value => ['nuevo', 'contactado', 'en_proceso', 'vendido', 'perdido'].includes(value),
  },
})

const ESTADO_MAP = {
  nuevo:       { label: 'Nuevo',       theme: 'blue'   },
  contactado:  { label: 'Contactado',  theme: 'yellow' },
  en_proceso:  { label: 'En proceso',  theme: 'purple' },
  vendido:     { label: 'Vendido',     theme: 'green'  },
  perdido:     { label: 'Perdido',     theme: 'red'    },
}

const config = computed(() => ESTADO_MAP[props.estado])
</script>

<style scoped>
/* ── Base ── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1.5px solid transparent;
  transition: opacity 0.2s ease;
  cursor: default;
  user-select: none;
}

/* ── Dot indicator ── */
.badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: currentColor;
  opacity: 0.8;
}

/* ── Themes ── */
.badge--blue {
  background-color: #dbeafe;
  color: #1d4ed8;
  border-color: #bfdbfe;
}

.badge--yellow {
  background-color: #fef9c3;
  color: #a16207;
  border-color: #fde68a;
}

.badge--purple {
  background-color: #ede9fe;
  color: #6d28d9;
  border-color: #ddd6fe;
}

.badge--green {
  background-color: #dcfce7;
  color: #15803d;
  border-color: #bbf7d0;
}

.badge--red {
  background-color: #fee2e2;
  color: #b91c1c;
  border-color: #fecaca;
}

.badge--gray {
  background-color: #f3f4f6;
  color: #6b7280;
  border-color: #e5e7eb;
}
</style>
