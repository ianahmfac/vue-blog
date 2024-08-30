import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const post = ref(null);
const error = ref(null);

async function loadPost(id) {
  try {
    error.value = null;

    const response = await getDoc(doc(projectFirestore, "posts", id));
    if (response.exists()) {
      post.value = {
        ...response.data(),
        id: id,
      };
    } else {
      throw Error("Post doesn't exist.");
    }
  } catch (err) {
    error.value = err.message;
  }
}

export { post, error, loadPost };
