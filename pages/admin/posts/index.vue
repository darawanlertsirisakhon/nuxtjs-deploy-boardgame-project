<template>
  <div>
    <PostList isAdmin :posts="loadData" />
  </div>
</template>
<script>
import PostList from '../../../components/posts/PostList.vue'

export default {
  middleware:'auth',
  components: {
    PostList,
  },
  computed: {
    loadData() {
      return this.$store.getters.getAllPosts
    },
  },
}
</script>
