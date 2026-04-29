<script setup>
defineProps({
contactos: { type: Array, required: true }
})
const emit = defineEmits(["contacto-seleccionado"])



const seleccionar = (contacto) => {
// Completad vosotros: emitid el evento con el contacto
emit("contacto-seleccionado", contacto)
}
</script>
<template>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Email</th>
<th>Teléfono</th>
<th>Ciudad</th>
<th>Acción</th>
</tr>
</thead>
<tbody>
<tr v-for = 
<!-- v-for sobre props.contactos -->
<!-- Botón "Ver" que llama a seleccionar(contacto) -->

</tbody>
</table>
</template>
