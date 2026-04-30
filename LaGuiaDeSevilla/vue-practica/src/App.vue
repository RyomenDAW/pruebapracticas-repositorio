<script setup>
import { ref, computed, onMounted } from "vue"
import TablaContactos from "./components/TablaContactos.vue"

const contactos = ref([])
const cargando = ref(false)
const error = ref(null)
const busqueda = ref("")
const contactoSeleccionado = ref(null)

onMounted(async () => {
  cargando.value = true
  error.value = null
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!res.ok) throw new Error("Error al cargar los contactos")
    contactos.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    cargando.value = false
  }
})

const contactosFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase()
  if (!texto) return contactos.value
  return contactos.value.filter(
    (c) =>
      c.name.toLowerCase().includes(texto) ||
      c.email.toLowerCase().includes(texto)
  )
})

const totalContactos = computed(() => contactos.value.length)
const totalFiltrados = computed(() => contactosFiltrados.value.length)

const seleccionarContacto = (contacto) => {
  contactoSeleccionado.value = contacto
}
</script>

<template>
  <header class="top-header">
    <div class="header-inner">
      <div class="header-center">
        <span class="header-main-title">Practica 3</span>
      </div>
      <div class="header-right">
        <div class="header-actions">
          <span class="header-user">Antonio</span>
        </div>
      </div>
    </div>
  </header>

  <div class="app">
    <h2>Agenda de Contactos</h2>

    <p v-if="cargando" class="info">Cargando contactos...</p>

    <p v-else-if="error" class="error">{{ error }}</p>

    <template v-else>
      <input
        v-model="busqueda"
        type="text"
        placeholder="Buscar por nombre o email..."
        class="buscador"
      />

      <p class="contador">
        Mostrando <strong>{{ totalFiltrados }}</strong> de
        <strong>{{ totalContactos }}</strong> contactos
      </p>

      <div class="layout">
        <TablaContactos
          :contactos="contactosFiltrados"
          @contacto-seleccionado="seleccionarContacto"
        />

        <div v-if="contactoSeleccionado" class="detalle">
          <h2>{{ contactoSeleccionado.name }}</h2>
          <p><strong>Email:</strong> {{ contactoSeleccionado.email }}</p>
          <p><strong>Telefono:</strong> {{ contactoSeleccionado.phone }}</p>
          <p><strong>Ciudad:</strong> {{ contactoSeleccionado.address.city }}</p>
          <p><strong>Empresa:</strong> {{ contactoSeleccionado.company.name }}</p>
          <p><strong>Web:</strong>
            <a :href="`https://${contactoSeleccionado.website}`" target="_blank">
              {{ contactoSeleccionado.website }}
            </a>
          </p>
          <button @click="contactoSeleccionado = null">Cerrar</button>
        </div>
      </div>
    </template>
  </div>

  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-item">
        <strong>Email:</strong> info@antonio.com
      </div>
      <div class="footer-item">
        <strong>Nombre:</strong> Practica
      </div>
      <div class="footer-item">
        <strong>Teléfono:</strong> +34 608 93 48 85
      </div>
    </div>
  </footer>
</template>

<style scoped>

.info {
  color: #cccccc;
}
.error {
  color: #ff8b9b;
  font-weight: bold;
}
.buscador {
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #2e333b;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  background: #121519;
  color: #f5f5f5;
}
.buscador::placeholder {
  color: #7b7f88;
}
.contador {
  color: #b8b8b8;
  margin-bottom: 1rem;
}
.layout {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}
.detalle {
  min-width: 260px;
  border: 1px solid #22272f;
  border-radius: 10px;
  padding: 1.25rem;
  background: #0a0b0c;
}
.detalle h2 {
  margin-top: 0;
}
.detalle p {
  color: #e5e7eb;
}
.detalle button {
  margin-top: 1rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  background: #2f855a;
  color: white;
  cursor: pointer;
}
.detalle button:hover {
  background: #276749;
}

.top-header {
  width: 100%;
  padding: 1rem 1.5rem;
  background: #0f1720;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.top-header .header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header-left,
.header-center,
.header-right {
  display: flex;
  align-items: center;
}

.header-center {
  flex: 1;
  justify-content: center;
}

.header-main-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #f8fafc;
}

.app {
  width: min(860px, calc(100% - 2rem));
  min-height: calc(100vh - 94px);
  margin: 1rem auto;
  padding: 1.5rem 1rem 2rem;
  box-sizing: border-box;
  font-family: sans-serif;
  color: #f5f5f5;
  background: #0f1115;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  position: relative;
  padding: 0.9rem 1rem;
  border-radius: 9999px;
  background: #f8fafc;
}

.header-brand::after {
  content: "";
  position: absolute;
  bottom: -0.55rem;
  left: 50%;
  transform: translateX(-50%);
  width: 68px;
  height: 4px;
  background: #ffffff;
  border-radius: 9999px;
}

.header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: #0f1720;
  color: #f8fafc;
  font-size: 0.95rem;
  font-weight: 700;
}

.header-title {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-user {
  padding: 0.55rem 0.9rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  color: #cbd5e1;
  font-size: 0.95rem;
}

.logout-button {
  padding: 0.55rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  color: #e2e8f0;
  cursor: pointer;
}

.logout-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.app-footer {
  width: 100%;
  margin-top: 3rem;
  padding: 1.5rem 1rem;
  background: #0f1720;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
}

.footer-content {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-item {
  font-size: 0.9rem;
}

.footer-item strong {
  color: #f8fafc;
}

</style>

<style>
html, body, #app {
  min-height: 100%;
  margin: 0;
  padding: 0;
  background: #121417;
  color: #f5f5f5;
}
body {
  min-height: 100vh;
}
</style>