<template>
  <page-single>
    <section class="hello" v-if="main">
      <h1>{{main.info.title}}</h1>
      <p>{{main.info.description}}</p>
    </section>
    <section v-if="main">
      <h2 class="h3">Pages</h2>
      <div class="list-group list-group-flush">
        <router-link
          :to="`/pages${index}`"
          v-for="(page,index) in main.pages"
          :key="index"
          class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{page.title}}</h5>
            <small>{{index}}</small>
          </div>
          <p class="mb-1">{{page.description}}</p>
        </router-link>
      </div>
    </section>
  </page-single>
</template>

<script>
import {mapState,mapActions} from "vuex"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
      ...mapState("docs",["main"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
