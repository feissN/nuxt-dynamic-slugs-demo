<template>
  <div v-if="data">
    <pre>{{ data }}</pre>
  </div>
  <div v-else-if="error">No post with id '{{ postId }}' found</div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";

const route = useRoute();
const router = useRouter();

// get the id of the current slug-param (last item after the last '-')
const postId = ref((route.params?.slug as string)?.split("-")?.at?.(-1));

const { data, error } = await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);

if (data.value) {
  router.replace({
    params: { slug: slugifyPost(data.value) },
  });
}
</script>
