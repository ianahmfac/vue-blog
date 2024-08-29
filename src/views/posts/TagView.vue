<script setup>
import { computed, onMounted } from "vue";
import { error, loadPosts, posts, isLoading } from "../../composable/getPosts";
import LoadingVue from "../../components/LoadingVue.vue";
import { useRoute, useRouter } from "vue-router";
import PostList from "../../components/posts/PostList.vue";

const route = useRoute();

const { tag } = route.params;

const postByTag = computed(() => {
  return posts.value.filter((post) => post.tags.includes(tag));
});

onMounted(() => {
  loadPosts();
});
</script>

<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Blog of @ianahmfac</h1>
            <span class="subheading">Posts by tag: #{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="error">
          {{ error }}
        </div>
        <div v-else-if="isLoading">
          <LoadingVue />
        </div>
        <PostList v-else :posts="postByTag" />
      </div>
    </div>
  </div>
</template>
