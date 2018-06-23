<template>
  <b-navbar toggleable="md" class="main-nav">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <nuxt-link class="navbar-brand" to="/"><img src="@/assets/img/logo.svg" alt=""></nuxt-link>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-3">
          <div v-for="category in getCategories" :key="category.slug">
            <nuxt-link :to="'/' + category.slug" class="nav-link">{{ category.name }}</nuxt-link>
            <!-- <b-nav-item :href="'/' + category.slug">{{category.name}}</b-nav-item> -->
          </div>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    getCategories() {
      return this.$store.getters.getCategories
    }
  }
}
</script>
