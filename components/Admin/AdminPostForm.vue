<template>
  <section>
      <b-container class="col-md-8 mb-5">
        <form @submit.prevent="onSave">
            <b-form-group id="titleGroup"
                        label="Başlık"
                        label-for="titleInput">
                <b-form-input id="titleInput"
                            type="text"                            
                            v-model="editedPost.title"
                            placeholder="Başlık">
                </b-form-input>
            </b-form-group>
            <b-form-group id="categoryGroup"
                        label="Kategori"
                        label-for="categorySelect">
                <select v-model="selected" @change="setCategories" class="mb-3 form-control custom-select">
                    <option :value="null" disabled selected="selected">-- Kategori Seçiniz --</option>
                    <option v-for="option in options" :value="option" :key="option.id">{{ option.name }}</option>
                </select>
            </b-form-group>
            <!-- {{ selected }} -->
            <div class="step mb-3" v-for="(steps, index) in editedPost.steps" :key="steps.id" style="background: #f0f0f0; padding: 10px;">
                <b-form-group label="Adım Başlık">
                    <b-form-input type="text"
                                v-model="steps.title"
                                placeholder="Adım Başlık">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Adım Açıklama">
                    <b-form-input type="text"
                                v-model="steps.desc"
                                placeholder="Adım Açıklama">
                    </b-form-input>
                </b-form-group>
                <b-button @click="removeElement(index);" :size="'sm'" :variant="'link'">Adımı Sil</b-button>
            </div>
            <b-button @click="addRow" :size="'sm'" :variant="'primary'" class="mb-4">Adım Ekle</b-button>
            <hr>
            <h5>SEO</h5>
            <div class="meta">
                <b-form-group label="Meta Açıklama">
                    <b-form-input type="text"     
                                v-model="editedPost.meta.description"
                                placeholder="Meta Açıklama">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Meta Anahtar Kelimeler">
                    <b-form-input type="text"                               
                                v-model="editedPost.meta.keywords"
                                placeholder="Meta Anahtar Kelime">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Kategori URL (Türkçe karakter olmadan)" style="display:none;">
                <b-form-input type="text"
                            v-model="editedPost.slug"
                            placeholder="Kategori Türkçe karakter olmadan">
                </b-form-input>
            </b-form-group>
             <b-form-group label="Url">
                <b-form-input type="text"
                            v-model="editedPost.slug"
                            placeholder="Url">
                </b-form-input>
            </b-form-group>
            <div>Link son hali: <span style="color: blue">basitceogren.com/{{ editedPost.category }}/{{ editedPost.slug }}</span></div>
            <hr>
            </div>
            <b-form-group label="Yazar">
                <b-form-input type="text"
                            v-model="editedPost.author"
                            placeholder="Yazar">
                </b-form-input>
            </b-form-group>
            <b-button :variant="'success'" type="submit">Gönder</b-button>
        </form>
      </b-container>
  </section>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            editedPost: this.post ? { ...this.post } : {
                title: '',
                steps: [{ "id": "1"}],
                author: '',
                slug: '',
                meta: {},
                category: '',
                categoryName: '',
            },
            selected: null,
            options: this.$store.state.categories,
        }
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    methods: {
        setCategories() {
            // console.log(this.selected.name)
            // console.log(this.selected.slug)
            this.editedPost.category = this.selected.slug
            this.editedPost.categoryName = this.selected.name
        },
        onSave(vuexContext, editedPost) {
            // console.log(this.editedPost)
            axios.post('https://basitceogren-1867a.firebaseio.com/posts.json?auth=' + this.$store.state.token, this.editedPost)
                    .then(result => console.log(result))
                    .catch(e => console.log(e))
        },
        addRow: function() {
            this.editedPost.steps.push({
                id: this.editedPost.steps.length + 1,
                title: '',
                desc: '',
                file: ''
            });
        },
        removeElement: function(index) {
            this.editedPost.steps.splice(index, 1);
        }
    }
}
</script>
