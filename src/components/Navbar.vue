<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
      <RouterLink class="navbar-brand" :to="{ name: 'home' }"
        >@ianahmfac</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto py-4 py-lg-0 d-flex align-items-center">
          <li class="nav-item">
            <RouterLink
              class="nav-link px-lg-3 py-3 py-lg-4"
              :to="{ name: 'home' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link px-lg-3 py-3 py-lg-4" href="#">About</a>
          </li>
          <li class="nav-item" v-if="route.name != 'post-create'">
            <RouterLink
              :to="{ name: 'post-create' }"
              class="nav-link px-lg-2 py-3 py-lg-4"
            >
              <div class="btn btn-sm btn-primary">+ Post</div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
