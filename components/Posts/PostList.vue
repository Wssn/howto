<template>
    <div class="col-md-8 offset-md-2 mt-5">
        <PostPreview
            v-for="post in posts" :key="post.id"
            :id="post.id"
            :title="post.title"
            :steps="post.steps"
            :author="post.author"
            :is-admin="isAdmin"
            :slug="post.slug"
            :meta="post.meta"
            :category="post.category"
        />
    </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
      isAdmin: {
          type: Boolean,
          default: false
      },
      posts: {
          type: Array,
          required: true
      }
  }
}
</script>
