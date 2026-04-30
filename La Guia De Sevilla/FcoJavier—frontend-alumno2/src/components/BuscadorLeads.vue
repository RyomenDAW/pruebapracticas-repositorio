<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  leads: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['resultado-filtrado'])

const busqueda = ref('')

const leadsFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase().trim()
  return texto
    ? props.leads.filter(lead =>
        lead.nombre.toLowerCase().includes(texto) ||
        lead.empresa.toLowerCase().includes(texto) ||
        lead.email.toLowerCase().includes(texto)
      )
    : props.leads
})

watch(leadsFiltrados, (filtrados) => {
  emit('resultado-filtrado', filtrados)
}, { immediate: true })
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <i class="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        v-model="busqueda"
        type="text"
        placeholder="Buscar por nombre, empresa o email..."
        class="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-4 text-sm
               focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <p class="text-sm text-gray-500">
      {{ leadsFiltrados.length }} resultados encontrados
    </p>
  </div>
</template>