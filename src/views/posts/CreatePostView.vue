<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addDoc, collection } from "firebase/firestore";
import { projectFirestore } from "../../firebase/config";

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

  await addDoc(collection(projectFirestore, "posts"), post);

  router.replace({ name: "home" });
}
</script>

<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="page-heading">
            <h1>Create New Post</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form @submit.prevent="addPost">
              <div class="form-floating">
                <input
                  class="form-control"
                  id="title"
                  type="text"
                  placeholder="Enter title post..."
                  v-model="title"
                />
                <label for="title">Title Post</label>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  id="body"
                  placeholder="Enter your content here..."
                  style="height: 12rem"
                  v-model="body"
                ></textarea>
                <label for="body">Content Post</label>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  id="tags"
                  type="text"
                  placeholder="Enter title tags => ['html', 'css', 'js']"
                  v-model="tag"
                  @keydown.enter.prevent="insertTag"
                />
                <label for="tags">Tags Post</label>
                <span class="me-1" v-for="tag in tags" :key="tag"
                  >#{{ tag }}</span
                >
              </div>
              <!-- Submit Button-->
              <button
                class="btn btn-primary text-uppercase"
                id="submitButton"
                type="submit"
                @click.prevent="addPost"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
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
