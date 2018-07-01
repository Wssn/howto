<template>
    <div>{{ $route.params.category }}</div>
</template>

<script>
import Vuex from "vuex"
import axios from "axios"

export default {
  async asyncData({params}) {
    return axios.get('https://howto-a9089.firebaseio.com/posts.json?orderBy="category"&equalTo=' + '"' + params.category + '"' + '&print=pretty')
    .then((res) => {
        const obj = res.data;
        const id = Object.keys(obj)[0];
        const result = obj[id];
        return {
          result
        }
    })
  },
  layout: 'default',
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
