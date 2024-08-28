import { ref } from "vue";

const post = ref(null);
const error = ref(null);

async function loadPost(id) {
  try {
    error.value = null;

    let data = await fetch(`http://localhost:3000/posts/${id}`);
    if (!data.ok) {
      throw Error("No data found");
    }
    post.value = await data.json();
  } catch (err) {
    error.value = err.message;
  }
}

export { post, error, loadPost };
