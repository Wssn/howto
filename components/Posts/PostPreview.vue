<template>
    <div class="box post-box mb-3">
        <nuxt-link :to="{name: 'category-slug', params: { slug: slug, id: id, category: category } }">
            <p class="post-box-title">{{title}}</p>
        </nuxt-link>
        <p class="post-box-count">{{steps.length}} adım</p>
    </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
      id: {
          type: String,
          required: true
      },
      title: {
          type: String,
          required: true
      },
      steps: {
          type: Array,
          required: true
      },
      category: {
          type: String,
          required: true
      },
      isAdmin: {
          type: Boolean,
          required: true
      },
      author: {
          type: String,
          required: true
      },
      meta: {
          type: Object,
          required: true
      },
      slug: {
          type: String,
          required: true
      }
  },
  computed: {
      postLink() {
          return this.isAdmin ? '/admin/' + this.slug : '/post/' + this.slug
      }
  }
}
</script>
