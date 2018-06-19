<template>
  <section>
      <PostList :posts="loadedPosts"/>
  </section>
</template>

<script>
import PostList from '@/components/Posts/PostList'
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
  },
  // head () {
  ////   let post = this.loadedPosts
  //   return {
  //     title: post.title,
  //     meta: [
  //       {
  //         hid: `description`,
  //         name: 'description',
  //         content: post.meta.descripton
  //       },
  //       {
  //         hid: `keywords`,
  //         name: 'keywords',
  //         keywords: post.meta.keyword
  //       }
  //     ]
  //   }
  // }
}
</script>
