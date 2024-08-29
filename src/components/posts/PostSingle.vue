<script setup>
import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const { post } = defineProps({
  post: Object,
});

const snippet = computed(() => {
  return post.body.substring(0, 100) + "...";
});

function navigateToTag(tag) {
  router.push({ name: "post-tag", params: { tag: tag } });
}
</script>

<template>
  <RouterLink :to="{ name: 'post-detail', params: { id: post.id } }">
    <h2 class="post-title">
      {{ post.title }}
    </h2>
    <h3 class="post-subtitle">{{ snippet }}</h3>
  </RouterLink>
  <p class="post-meta">
    Tags:
    <span
      @click="navigateToTag(tag)"
      class="me-1"
      style="cursor: pointer"
      v-for="tag in post.tags"
      :key="tag"
      >#{{ tag }}</span
    >
  </p>
</template>
