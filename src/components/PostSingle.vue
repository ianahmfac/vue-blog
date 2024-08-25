<script setup>
import { computed } from "vue";

const { post } = defineProps({
  post: Object,
});

const snippet = computed(() => {
  return post.body.substring(0, 100) + "...";
});
</script>

<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<style>
h3 {
  font-weight: 600;
}
</style>
