<script setup>
import PostSingle from "./PostSingle.vue";

const { posts } = defineProps({
  posts: Array,
});
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <!-- Post preview-->
    <div class="post-preview">
      <PostSingle :post="post" />
    </div>
    <!-- Divider-->
    <hr class="my-4" />
  </div>
</template>
