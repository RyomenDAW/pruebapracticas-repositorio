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
    if(!respuesta.ok){
        throw new Error(`Error del servidor: ${respuesta.status}`)
    }
    contactos.value = await respuesta.json()
    }catch(err){
        error.value = err.message
    }finally{
    cargando.value = false
    }
}

const contactosFiltrados = computed(() => {
// Completad vosotros: filtrad por nombre o email usando busqueda.value
const filtro = busqueda.value.toLowerCase()
return contactos.value.filter(c => c.name.toLowerCase()includes(filtro) || c.email.toLowerCase()includes(filtro))
})

const alSeleccionar = (contacto) => {
// Completad vosotros: guardad el contacto seleccionado
seleccionado.value = contacto
}

onMounted(() => cargarContactos())
</script>
<template>
<div class="contenedor">
<h1>Directorio de Contactos</h1>
<!-- Input de búsqueda con v-model -->
<!-- Contador: "Mostrando X de Y contactos" -->
<!-- Estados: cargando / error -->
<!-- TablaContactos con props y @contacto-seleccionado -->
<!-- Panel de detalle con v-if -->
</div>
</template>