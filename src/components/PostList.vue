<script setup>
import PostSingle from "./PostSingle.vue";

const { posts } = defineProps({
  posts: Array,
});
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <PostSingle :post="post" />
    </div>
  </div>
</template>
