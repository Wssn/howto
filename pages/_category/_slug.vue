<template>
    <section class="container mt-5" itemscope itemtype="http://schema.org/Article">
      <div class="row">
        <div class="col-md-8 offset-md-2 step-body">
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
          <div class="social d-sm-flex">
              <a :href="'http://www.facebook.com/sharer.php?u=https://basitceogren.com' + $nuxt.$route.path" target="_blank" class="share-button facebook">
                  <svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill="#FFFFFF" fill-rule="nonzero">
                          <path d="M2.63881964,14 L2.61818182,7.63636364 L0,7.63636364 L0,5.09090909 L2.61818182,5.09090909 L2.61818182,3.5 C2.61818182,1.1382 4.12253673,0 6.28961891,0 C7.32767564,0 8.21982764,0.0751354545 8.47982618,0.108722727 L8.47982618,2.57694182 L6.97683927,2.57760364 C5.79825818,2.57760364 5.57005745,3.12208909 5.57005745,3.92108818 L5.57005745,5.09090909 L9,5.09090909 L7.69090909,7.63636364 L5.57005745,7.63636364 L5.57005745,14 L2.63881964,14 Z" id="Shape"></path>
                        </g>
                      </g>
                  </svg>
                  Paylaş
              </a>
              <a :href="'https://twitter.com/share?url=https://basitceogren.com' + $nuxt.$route.path + '&amp;text=' + this.result.title" target="_blank" class="share-button twitter">
                  <svg width="16px" height="14px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M16,2 C15.4,2.3 14.8,2.4 14.1,2.5 C14.8,2.1 15.3,1.5 15.5,0.7 C14.9,1.1 14.2,1.3 13.4,1.5 C12.8,0.9 11.9,0.5 11,0.5 C9.3,0.5 7.8,2 7.8,3.8 C7.8,4.1 7.8,4.3 7.9,4.5 C5.2,4.4 2.7,3.1 1.1,1.1 C0.8,1.6 0.7,2.1 0.7,2.8 C0.7,3.9 1.3,4.9 2.2,5.5 C1.7,5.5 1.2,5.3 0.7,5.1 C0.7,5.1 0.7,5.1 0.7,5.1 C0.7,6.7 1.8,8 3.3,8.3 C3,8.4 2.7,8.4 2.4,8.4 C2.2,8.4 2,8.4 1.8,8.3 C2.2,9.6 3.4,10.6 4.9,10.6 C3.8,11.5 2.4,12 0.8,12 C0.5,12 0.3,12 0,12 C1.5,12.9 3.2,13.5 5,13.5 C11,13.5 14.3,8.5 14.3,4.2 C14.3,4.1 14.3,3.9 14.3,3.8 C15,3.3 15.6,2.7 16,2 Z" id="Shape"></path>
                        </g>
                      </g>
                  </svg>
                  Tweet
              </a>
              <a :href="'https://wa.me/?text=https://basitceogren.com' + $nuxt.$route.path + '?utm_source=whatsapp&utm_medium=whatsapp&utm_campaign=whatsapp'" target="_blank" class="share-button whatsapp d-flex d-sm-none">
                  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g stroke="none" stroke-width="1" fill="#FFFFFF" fill-rule="evenodd">
                        <path d="M13.6,2.3 C12.1,0.8 10.2,0 8,0 C3.7,0 0.1,3.6 0.1,7.9 C0.1,9.3 0.5,10.7 1.2,11.9 L0,16 L4.2,14.9 C5.4,15.5 6.7,15.9 8,15.9 C12.4,15.9 15.9,12.3 15.9,8 C16,5.8 15.1,3.8 13.6,2.3 Z M11.9,10.8 C11.7,11.3 10.9,11.7 10.6,11.7 C10.3,11.8 9.3,11.7 8.2,11.2 C6.2,10.3 4.9,8.3 4.8,8.2 C4.7,8.1 4,7.1 4,6.2 C4,5.3 4.5,4.7 4.7,4.5 C5.1,4.1 5.9,4.2 6.1,4.6 C6.2,5 6.6,6 6.7,6.1 C6.8,6.2 6.8,6.6 6.5,6.8 C6.4,6.8 5.9,7.2 6.1,7.5 C6.2,7.7 6.6,8.3 7.2,8.9 C8,9.6 8.6,9.8 8.8,9.9 C9,10 9.1,10 9.2,9.8 C9.3,9.7 9.7,9.2 9.8,9 C9.9,8.8 10.1,8.8 10.2,8.9 C10.3,9 11.4,9.4 11.6,9.5 C11.8,9.7 12,9.7 12,9.8 C12.1,9.9 12.1,10.3 11.9,10.8 Z" id="Shape"></path>
                      </g>
                  </svg>
                  Whatsapp
              </a>
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