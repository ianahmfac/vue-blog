<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([]);

function insertTag() {
  if (!tags.value.includes(tag.value) && tag.value.trim() != "") {
    tags.value.push(tag.value.trim());
  }
  tag.value = "";
}

async function addPost() {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
  };

  await fetch("http://localhost:3000/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  router.replace({ name: "home" });
}
</script>

<template>
  <div class="content">
    <form @submit.prevent="addPost">
      <div>
        <label for="title">Title</label>
        <input v-model="title" type="text" id="title" />
      </div>
      <div>
        <label for="body">Body</label>
        <textarea
          v-model="body"
          type="text"
          id="body"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <label for="tags">Tags</label>
        <input
          v-model="tag"
          type="text"
          id="tags"
          @keydown.enter.prevent="insertTag"
        />
      </div>
      <button type="submit">Create</button>
    </form>

    <div v-for="tag in tags" :key="tag">#{{ tag }}</div>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin-top: 8px;
}

button {
  margin-top: 16px;
}
</style>
