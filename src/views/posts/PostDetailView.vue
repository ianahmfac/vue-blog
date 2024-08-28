<script setup>
import { onMounted } from "vue";
import { loadPost, post, error } from "../../composable/getPost";
import LoadingVue from "../../components/LoadingVue.vue";

const { id } = defineProps(["id"]);

onMounted(() => {
  loadPost(id);
});
</script>

<template>
  <div class="content" v-if="error">
    {{ error }}
  </div>
  <div class="content" v-else-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <LoadingVue />
  </div>
</template>

<style scoped>
.content {
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
}
</style>
