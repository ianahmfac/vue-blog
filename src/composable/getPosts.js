import { ref } from "vue";

const posts = ref([]);
const error = ref(null);

async function loadPosts() {
  try {
    error.value = null;
    let data = await fetch("http://localhost:3000/posts");
    if (!data.ok) {
      throw Error("No data found");
    }
    posts.value = await data.json();
  } catch (err) {
    error.value = err.message;
  }
}

export { posts, error, loadPosts };
