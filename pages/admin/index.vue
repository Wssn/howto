<template>
  <div>
    Admin
    <hr>
    <nuxt-link :to="'/admin/new'">Yeni Ekle</nuxt-link>
    <a @click="onLogout">Logout</a>
    <h3>Yazılar</h3>
    <PostList isAdmin />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
      PostList
  },
  middleware: ['check-auth', 'auth'],
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
      this.$router.push('/admin/auth');
    }
  }
}
</script>