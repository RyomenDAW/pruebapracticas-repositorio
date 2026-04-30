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
        <th>Telefono</th>
        <th>Ciudad</th>
        <th>Accion</th>
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
table {
  width: 100%;
  border-collapse: collapse;
  background: #11151b;
  color: #f5f5f5;
}
th, td {
  padding: 0.6rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-align: left;
}
th {
  background: #161b22;
  color: #e5e7eb;
}
tr {
  transition: background 0.15s ease;
}
tr:hover {
  background: #171d26;
}
button {
  padding: 0.3rem 0.7rem;
  border: none;
  border-radius: 5px;
  background: #2f855a;
  color: white;
  cursor: pointer;
}
button:hover {
  background: #276749;
}
</style>