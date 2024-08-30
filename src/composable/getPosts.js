import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const posts = ref([]);
const error = ref(null);
const isLoading = ref(false);

async function loadPosts() {
  try {
    isLoading.value = true;
    error.value = null;

    const colRef = collection(projectFirestore, "posts");
    const response = await getDocs(colRef);
    const data = [];
    response.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    posts.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}

export { posts, error, isLoading, loadPosts };
