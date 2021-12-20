<script setup>
defineProps({
  options: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <span>Test</span>
  <p v-if="options?.options">|-<NestedComponent :options="options?.options" /></p>

</template>
