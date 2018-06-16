<template>
  <div>
    <h1>{{ result.title }}</h1>
      {{ result.category }}
      <hr>
      <div v-for="step in result.steps" :key="step.id"> 
        {{ step.title }} <br>
        {{ step.desc }}
        <hr>
      </div>
  </div>
</template>

<script>
import Vuex from "vuex"
import axios from "axios"

export default {
  async asyncData({params}) {
    return axios.get('https://howto-a9089.firebaseio.com/posts.json?orderBy="slug"&equalTo=' + '"' + params.slug + '"' + '&print=pretty')
    .then((res) => {
        const obj = res.data;
        const id = Object.keys(obj)[0];
        const result = obj[id];
        return {
          result
        }
    })
  },
  head() {
    return {
      title: this.result.title,
      meta: [{
        hid: `description`,	
        name: 'description',	
        content: this.result.meta.description	
      },	
      {	
        hid: `keywords`,	
        name: 'keywords',	
        keywords: this.result.meta.keywords	
      }]
    } 
  }
}
 
</script>
