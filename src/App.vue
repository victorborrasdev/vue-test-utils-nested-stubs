<script setup>
import NestedComponent from './components/List.vue'
const options = [
    {text: 'Option 1'},
    {
      text: 'Option 2',
      children: [
        {text: 'Option 2.1'},
        {text: 'Option 2.2'}
      ]
    },
    {text: 'Option 3'},
  ]
</script>

<template>
  <NestedComponent :options="options" />
</template>

<style>
</style>
