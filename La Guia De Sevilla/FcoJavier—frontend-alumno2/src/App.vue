<script setup>
import { ref } from 'vue'
import BuscadorLeads from './components/BuscadorLeads.vue'
import OrigenBadge from './components/OrigenBadge.vue'

// 1. Datos falsos (mock) para probar
const leadsOriginales = [
  { id: 1, nombre: 'Ana García', empresa: 'TechCorp', email: 'ana@techcorp.com', origen: 'web' },
  { id: 2, nombre: 'Juan Pérez', empresa: 'Ventas SL', email: 'juan@ventas.es', origen: 'google_ads' },
  { id: 3, nombre: 'María López', empresa: 'Design Studio', email: 'maria@design.com', origen: 'meta_ads' },
  { id: 4, nombre: 'Carlos Ruiz', empresa: 'Consultoría CR', email: 'carlos@cr.com', origen: 'llamada' },
  { id: 5, nombre: 'Laura Díaz', empresa: 'Startup SA', email: 'laura@startup.com', origen: 'referido' },
  { id: 6, nombre: 'Pedro Sánchez', empresa: 'Desconocido', email: 'pedro@mail.com', origen: 'tiktok' }, // Esto probará el fallback a "otros"
]

// 2. Estado para guardar los leads que el buscador nos devuelve filtrados
const leadsMostrados = ref([])

// 3. Función que escucha el emit '@resultado-filtrado' del BuscadorLeads
const actualizarLeads = (filtrados) => {
  leadsMostrados.value = filtrados
}
</script>

<template>
  <div class="p-8 max-w-3xl mx-auto font-sans">
    <h1 class="text-2xl font-bold mb-6">Prueba de Componentes</h1>

    <!-- Probando el Componente 2: El Buscador -->
    <BuscadorLeads
      :leads="leadsOriginales"
      @resultado-filtrado="actualizarLeads"
      class="mb-6"
    />

    <!-- Lista para mostrar los resultados -->
    <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div
        v-for="lead in leadsMostrados"
        :key="lead.id"
        class="p-4 flex justify-between items-center hover:bg-gray-50"
      >
        <div>
          <p class="font-semibold text-gray-900">{{ lead.nombre }}</p>
          <p class="text-sm text-gray-500">{{ lead.empresa }} • {{ lead.email }}</p>
        </div>

        <!-- Probando el Componente 1: El Badge -->
        <OrigenBadge :origen="lead.origen" />
      </div>

      <!-- Mensaje por si la búsqueda no coincide con nada -->
      <div v-if="leadsMostrados.length === 0" class="p-8 text-center text-gray-500">
        No hay leads que coincidan con tu búsqueda.
      </div>
    </div>
  </div>
</template>
