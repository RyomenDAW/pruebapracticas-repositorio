<script setup>
import { computed } from 'vue'

const props = defineProps({
  origen: {
    type: String,
    required: true,
  },
})

const origenMap = {
  web:        { icon: 'bi-globe',           label: 'Web' },
  google_ads: { icon: 'bi-megaphone',       label: 'Google Ads' },
  meta_ads:   { icon: 'bi-phone',           label: 'Meta Ads' },
  llamada:    { icon: 'bi-telephone',       label: 'Llamada' },
  referido:   { icon: 'bi-people',          label: 'Referido' },
  otros:      { icon: 'bi-question-circle', label: 'Otros' },
}

const badge = computed(() => origenMap[props.origen] ?? origenMap.otros)
</script>

<template>
  <span class="inline-flex items-center gap-1 text-sm font-medium">
    <i :class="['bi', badge.icon]" />
    {{ badge.label }}
  </span>
</template>