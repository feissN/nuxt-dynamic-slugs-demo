<template>
  <div>Index</div>
  <div style="display: flex; flex-direction: column">
    <NuxtLink v-for="post in posts" :key="post.id" :to="`/posts/${slugifyPost(post)}`">
      {{ post.title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";

const res = await useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
const posts = res.data;
</script>
