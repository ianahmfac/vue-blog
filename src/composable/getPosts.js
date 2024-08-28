import { ref } from "vue";

const posts = ref([]);
const error = ref(null);
const isLoading = ref(false);

async function loadPosts() {
  try {
    isLoading.value = true;
    error.value = null;
    let data = await fetch("http://localhost:3000/posts");
    if (!data.ok) {
      throw Error("No data found");
    }
    posts.value = await data.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}

export { posts, error, isLoading, loadPosts };
