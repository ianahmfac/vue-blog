<script setup>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

const posts = ref([
  {
    id: 1,
    title: "Artikel Pertama",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum accusantium placeat, ullam quisquam quas sed sit nulla voluptate esse natus quasi itaque ipsum exercitationem mollitia molestiae distinctio expedita, perferendis repellat.",
  },
  {
    id: 2,
    title: "Artikel Kedua",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ducimus iste molestias, quidem adipisci aspernatur quod dolores atque odio nesciunt, non velit perferendis architecto mollitia accusamus est a vitae inventore!",
  },
]);
</script>

<template>
  <main class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
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
