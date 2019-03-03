<template>
  <page-single>
    <div v-if="page">
      <section>
        <h1>{{page.title}}</h1>
        <div>
          <img src="https://placehold.it/300x200" class="img-fluid" alt="Responsive image">
        </div>
        <p>{{page.description}}</p>
      </section>
      <section v-if="page.parameters">
        <h2 class="h4">Parameters</h2>
        <table class="table table-sm">
          <tr v-for="(param,index) in page.parameters" :key="index">
            <td>{{param.name}}</td>
            <td>{{param.description}}</td>
          </tr>
        </table>
      </section>
      <section v-if="page.table">
        <h2 class="h4">Item Sheet</h2>
        <div v-for="(spec,index) in page.table" :key="index">
          <table class="table table-sm">
            <caption>{{spec.title}}</caption>
            <tr>
              <td v-for="(column,key) in spec.columns" :key="key">
                {{column}}
              </td>
            </tr>
            <tr v-for="(item,index) in spec.items" :key="index">
              <td v-for="(column,key) in spec.columns" :key="key">
                {{item[key]}}
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section v-if="page.specs">
        <h2 class="h4">Specs</h2>
        <div class="card" v-for="(doc,index) in page.specs" :key="index">
          <div class="card-body">
            <h3 class="card-title h5">{{doc.name}}</h3>
            <div class="card-text" v-md="doc.description" />

          </div>
        </div>
      </section>
      <section v-if="page.memo">
        <h2 class="h4">Memo</h2>
        <div class="card" v-for="(doc,index) in page.memo" :key="index">
          <div class="card-body">
            <h3 class="card-title h5">{{doc.name}}</h3>
            <div class="card-text" v-md="doc.description" />
          </div>
        </div>
      </section>

    </div>

  </page-single>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data(){
      return {
          page: null
      }
  },
  async mounted(){
    try{
      const path = this.$route.params.path || ""
      this.page = await this.loadPage({path})
    }catch (e) {
        alert("ページの読み込みに失敗しました。")
        throw e
    }
  },
  methods:{
      ...mapActions("docs",["loadPage"])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
