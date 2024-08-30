<script setup>
import { onMounted } from "vue";
import { loadPost, post, error, deletePost } from "../../composable/getPost";
import LoadingVue from "../../components/LoadingVue.vue";
import { useRouter } from "vue-router";

const { id } = defineProps(["id"]);
const router = useRouter();

async function deleteThisPost() {
  await deletePost(id);
  router.replace({ name: "home" });
}

onMounted(() => {
  loadPost(id);
});
</script>

<template>
  <main>
    <div class="content text-center" v-if="error">
      {{ error }}
    </div>
    <div class="content" v-else-if="post">
      <!-- Page Header-->
      <header
        class="masthead"
        style="background-image: url('/img/post-bg.jpg')"
      >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="post-heading">
                <h1>{{ post.title }}</h1>
                <span class="meta">
                  Tags:
                  <span class="me-1" v-for="tag in post.tags" :key="tag"
                    >#{{ tag }}</span
                  >
                </span>
                <button
                  class="btn btn-sm btn-danger mt-3"
                  @click="deleteThisPost"
                >
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Post Content-->
      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <p>
                {{ post.body }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div v-else>
      <LoadingVue />
    </div>
  </main>
</template>
