<!-- src/components/TarjetaUsuario.vue -->
<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    default: "Sin especificar",
  },
})

const emit = defineEmits(["seleccionar"])

const alPulsar = () => {
  emit("seleccionar", props.id)
}
</script>

<template>
  <div class="tarjeta">
    <h3>{{ props.nombre }}</h3>
    <p>Email: {{ props.email }}</p>
    <p>Ciudad: {{ props.ciudad }}</p>
    <button type="button" @click="alPulsar">Ver detalles</button>
  </div>
</template>

<style scoped>
.tarjeta {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
button {
  margin-top: 0.75rem;
  padding: 0.5rem 0.9rem;
  border: none;
  border-radius: 6px;
  background: #42b983;
  color: white;
  cursor: pointer;
}
button:hover {
  background: #36946f;
}
</style>
