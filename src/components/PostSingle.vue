<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const { post } = defineProps({
  post: Object,
});

const snippet = computed(() => {
  return post.body.substring(0, 100) + "...";
});
</script>

<template>
  <div class="post-item">
    <RouterLink :to="{ name: 'post-detail', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </RouterLink>
    <p>{{ snippet }}</p>
    <span style="margin-right: 4px" v-for="tag in post.tags" :key="tag"
      >#{{ tag }}</span
    >
  </div>
</template>

<style>
h3 {
  font-weight: 600;
}
.post-item {
  margin-bottom: 8px;
}
</style>
