import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "post-detail",
      component: () => import("../views/posts/PostDetailView.vue"),
      props: true,
    },
    {
      path: "/posts/create",
      name: "post-create",
      component: () => import("../views/posts/CreatePostView.vue"),
    },
    {
      path: "/tag/:tag",
      name: "post-tag",
      component: () => import("../views/posts/TagView.vue"),
    },
  ],
});

export default router;
