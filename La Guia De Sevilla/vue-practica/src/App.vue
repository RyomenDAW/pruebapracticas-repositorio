
<script setup>
import { ref, computed } from 'vue'

// La lista de tareas
const tareas = ref([
  { id: 1, texto: 'Aprender Vue.js', completada: false },
  { id: 2, texto: 'Hacer la práctica del día 2', completada: false },
  { id: 3, texto: 'Subir los cambios a GitHub', completada: false }
])

// Input nueva tarea
const nuevaTarea = ref('')

// Buscador
const busqueda = ref('')

// Añadir tarea
const agregarTarea = () => {
  if (nuevaTarea.value.trim() !== '') {
    tareas.value.push({
      id: Date.now(),
      texto: nuevaTarea.value,
      completada: false
    })
    nuevaTarea.value = ''
  }
}

// 2- Borrar tarea
const borrarTarea = (id) => {
  tareas.value = tareas.value.filter(t => t.id !== id)
}

// 3- Completar / descompletar
const toggleCompletada = (id) => {
  const tarea = tareas.value.find(t => t.id === id)
  if (tarea) {
    tarea.completada = !tarea.completada
  }
}

// 4- Contador pendientes
const tareasPendientes = computed(() => {
  return tareas.value.filter(t => !t.completada).length
})

// 5-Filtro búsqueda
const tareasFiltradas = computed(() => {
  if (!busqueda.value.trim()) return tareas.value

  return tareas.value.filter(t =>
    t.texto.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
</script>

<template>
  <div class="container">
  <h1>La Guía De Sevilla</h1>
    <h2>Gestor de Tareas</h2>

    <!-- Contador -->
    <p>Tienes {{ tareasPendientes }} tareas pendientes</p>

    <!-- Buscador -->
    <div class="search">
      <input
        v-model="busqueda"
        placeholder="Buscar tareas..."
        class="input"
      />
    </div>

    <!-- Añadir tarea -->
    <div class="add">
      <input
        v-model="nuevaTarea"
        placeholder="Nueva tarea..."
        class="input"
      />
      <button @click="agregarTarea">Añadir</button>
    </div>

    <!-- Lista -->
    <ul>
      <li v-for="tarea in tareasFiltradas" :key="tarea.id">
        
        <span :class="{ completada: tarea.completada }">
          {{ tarea.texto }}
        </span>

        <div class="acciones">
          <button @click="toggleCompletada(tarea.id)">tick</button>
          <button @click="borrarTarea(tarea.id)">x</button>
        </div>
      
      </li>
    </ul>
    <footer class="footer">
      <p>Gestor de tareas 2026.</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 520px;
  margin: 40px auto;
  padding: 24px;
  text-align: center;
  background: white;
  color: #0c0c0c;
  border-radius: 10px;
  border: 1px solid #ddd;
}

h1 {
  margin: 0 0 12px;
  font-size: 2rem;
  color: #990909;
}
h2 {
  margin: 0 0 12px;
  font-size: 1.8rem;
  color: #990909;
}
p {
  color: #444;
  margin: 0 0 20px;
}

.add {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
}

.input {
  flex: 1 1 240px;
  min-width: 180px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #111;
}

button {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: #ff0000;
  color: white;
  cursor: pointer;
}

.search {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  margin: 10px 0;
  padding: 12px 14px;
  border-radius: 8px;
  color: #111;
}

.acciones {
  display: flex;
  gap: 8px;
}

.acciones button {
  padding: 8px 12px;
  background: #ff0000;
}
.footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.footer p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}
</style>

<style>
body {
  background: white;
  margin: 0;
  font-family: Arial, sans-serif;
  color: #111;
}
</style>