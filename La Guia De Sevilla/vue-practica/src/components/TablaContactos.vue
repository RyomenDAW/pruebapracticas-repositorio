<script setup>
defineProps({
  contactos: { type: Array, required: true }
})

const emit = defineEmits(["contacto-seleccionado"])

const seleccionar = (contacto) => {
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
      <tr v-for="contacto in contactos" :key="contacto.id">
        <td>{{ contacto.name }}</td>
        <td>{{ contacto.email }}</td>
        <td>{{ contacto.phone }}</td>
        <td>{{ contacto.address.city }}</td>
        <td><button @click="seleccionar(contacto)">Ver</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table { width: 100%; border-collapse: collapse; border: 2px solid #333; }
th, td { text-align: left; padding: 0.6rem 0.8rem; border-bottom: 2px solid #333; border-right: 1px solid #ccc; }
th { background: #f0f0f0; border-bottom: 3px solid #333; }
tr:hover { background: #fafafa; }
button { 
  cursor: pointer; 
  background-color: red; 
  color: white; 
  border: none; 
  padding: 0.4rem 0.8rem; 
  border-radius: 4px; 
}

</style>
