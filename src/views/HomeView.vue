<script setup>
import { onMounted } from "vue";
import PostList from "../components/PostList.vue";
import { error, loadPosts, posts } from "../composable/getPosts";

onMounted(() => {
  loadPosts();
});
</script>

<template>
  <main class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <PostList v-else :posts="posts" />
  </main>
</template>

<style scoped>
.home {
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
}
</style>
