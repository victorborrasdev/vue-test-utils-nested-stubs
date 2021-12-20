<script setup>
defineProps({
  options: {
    type: Array,
    default: null
  }
})
</script>

<template>
  <ul>
    <li v-for="option in options" :key="option.id">
      {{ option.text }}
      <List v-if="option.children" :options="option?.children" />
    </li>
  </ul>

</template>
