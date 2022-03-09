<template>
  <div fluid="md">
    <div>
      <PostList :posts="loadData" />
      
    </div>
  </div>
</template>
<script>

import PostList from '../../components/posts/PostList.vue'

export default {
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
