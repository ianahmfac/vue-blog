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
  <main>
    <div class="content" v-if="error">
      {{ error }}
    </div>
    <div class="content" v-else-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <span style="margin-right: 4px" v-for="tag in post.tags" :key="tag"
        >#{{ tag }}</span
      >
    </div>
    <div v-else>
      <LoadingVue />
    </div>
  </main>
</template>
