
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
    <h1>Gestor de Tareas</h1>

    <!-- Contador -->
    <p>Tienes {{ tareasPendientes }} tareas pendientes</p>

   

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
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  text-align: center;
}



.add {
  margin: 10px 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  margin: 5px 0;
  padding: 5px;
}

.acciones button {
  margin-left: 5px;
}
</style>