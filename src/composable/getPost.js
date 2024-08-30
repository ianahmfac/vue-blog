import { ref } from "vue";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import { useRoute, useRouter } from "vue-router";

const post = ref(null);
const error = ref(null);

const router = useRouter();

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

async function deletePost(id) {
  return deleteDoc(doc(projectFirestore, "posts", id));
}

export { post, error, loadPost, deletePost };
