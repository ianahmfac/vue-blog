<script setup>
import { onMounted } from "vue";
import PostList from "../components/PostList.vue";
import { error, loadPosts, posts, isLoading } from "../composable/getPosts";
import LoadingVue from "../components/LoadingVue.vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  loadPosts();
});

function navigateToAddPost() {
  router.push({ name: "post-create" });
}
</script>

<template>
  <main class="home">
    <h1>Home</h1>
    <button class="btn btn-primary mb-3" @click="navigateToAddPost">
      + Add Post
    </button>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else-if="isLoading">
      <LoadingVue />
    </div>
    <PostList v-else :posts="posts" />
  </main>
</template>
