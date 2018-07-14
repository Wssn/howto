<template>
    <section class="container mt-5" itemscope itemtype="http://schema.org/Article">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 itemprop="name">{{ result.title }}</h1>
          <a class="button-shadow pink mb-4 mt-3">{{ result.categoryName }}</a>
          <div class="box mb-4" itemprop="articleBody">
            <div v-for="step in result.steps" :key="step.id" class="step-container d-flex"> 
              <div class="step-left mr-3">
                <span class="step-count">{{ step.id }}</span>
              </div>
              <div class="step-right">
                <p class="step-title">{{ step.title }}</p>
                <p v-if="step.desc" class="step-desc mt-2">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Vuex from "vuex"
import axios from "axios"

export default {
  async asyncData({params}) {
    return axios.get('https://basitceogren-1867a.firebaseio.com/posts.json?orderBy="slug"&equalTo=' + '"' + params.slug + '"' + '&print=pretty')
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
