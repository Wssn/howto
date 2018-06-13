<template>
  <div>
    <!-- <div v-for="post in post" :key="post.title"> 
      <h1>{{ post.title }}</h1>
      <div class="post-category">
        <span>{{ post.category }}</span>
      </div>
      <div class="post-content">
        <div class="post-row" v-for="step in post.steps" :key="step.id">
          <span class="row-count">{{ step.id }}</span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Vuex from "vuex"
import axios from "axios"


export default {
  data() {
    return {
      post: []
    }
  },
  async asyncData({params}) {
    return axios.get('https://howto-a9089.firebaseio.com/posts.json?orderBy="slug"&equalTo=' + '"' + params.slug + '"' + '&print=pretty')
      .then(res => {
        return {
          post: res.data
        }
      })
      // .catch(e => context.error(e))
  },
    head() {
      return {
        // title: this.post.title,
        meta: [
          {
            hid: `description`,
            name: 'description',
            // content: loadedPost.meta.descripton
          },
          {
            hid: `keywords`,
            name: 'keywords',
            // keywords: loadedPost.meta.keywords
          }
        ]
      }
    } 
  }
 
</script>
