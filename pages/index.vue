<template>
  <section class="container">
      <PostList :posts="loadedPosts"/>
  </section>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import axios from 'axios'
import Vuex from 'vuex'
export default {
  components: {
    PostList
  },
  layout: 'default',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
