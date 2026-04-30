<script setup>
import { ref, computed, onMounted } from "vue"
import TablaContactos from "./components/TablaContactos.vue"

const contactos = ref([])
const cargando = ref(false)
const error = ref(null)
const busqueda = ref("")
const seleccionado = ref(null)

async function cargarContactos() {
  cargando.value = true
  error.value = null
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!respuesta.ok) {
      throw new Error(`Error del servidor: ${respuesta.status}`)
    }
    contactos.value = await respuesta.json()
  } catch (err) {
    error.value = err.message
  } finally {
    cargando.value = false
  }
}

const contactosFiltrados = computed(() => {
  const filtro = busqueda.value.toLowerCase()
  return contactos.value.filter(c =>
    c.name.toLowerCase().includes(filtro) ||
    c.email.toLowerCase().includes(filtro)
  )
})

const alSeleccionar = (contacto) => {
  seleccionado.value = contacto
}

onMounted(() => cargarContactos())
</script>

<template>
  <div class="contenedor">
    <h1>Directorio de Contactos</h1>

    <input
      v-model="busqueda"
      type="text"
      placeholder="Buscar por nombre o email..."
      class="buscador"
    />

    <p class="contador">
      Mostrando {{ contactosFiltrados.length }} de {{ contactos.length }} contactos
    </p>

    <p v-if="cargando">Cargando contactos...</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <TablaContactos
      v-else
      :contactos="contactosFiltrados"
      @contacto-seleccionado="alSeleccionar"
    />

    <div v-if="seleccionado" class="detalle">
      <h2>{{ seleccionado.name }}</h2>
      <p><strong>Email:</strong> {{ seleccionado.email }}</p>
      <p><strong>Teléfono:</strong> {{ seleccionado.phone }}</p>
      <p><strong>Ciudad:</strong> {{ seleccionado.address.city }}</p>
      <p><strong>Empresa:</strong> {{ seleccionado.company.name }}</p>
      <p><strong>Web:</strong> {{ seleccionado.website }}</p>
      <button @click="seleccionado = null">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
.contenedor { max-width: 800px; margin: 2rem auto; font-family: sans-serif; padding: 2rem; border-radius: 10px; }
h1 { font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem; }
.buscador { width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; font-size: 1rem; box-sizing: border-box; border: 2px solid #333; border-radius: 4px; }
.contador { color: #100f0f; margin-bottom: 1rem; }
.error { color: red; }
.detalle { margin-top: 1.5rem; border: 3px solid #333; border-radius: 8px; padding: 1rem; background: #f9f9f9; }
.detalle button {
  margin-top: 0.5rem;
  cursor: pointer;
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 0.9rem;
  border-radius: 4px;
}
</style>

<style>
html, body { background-color: rgb(234, 233, 221);}
</style>