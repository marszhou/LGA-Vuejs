<template>
  <ol class="breadcrumb">
    <li><a href="#" v-link="{name: 'home'}">Home</a></li>
    <li v-for="(index, bc) of breadcrumbs" track-by='name'>
      <a href='#' v-link="{name: bc.name}" v-if='!!bc.name'>{{ bc.display }}</a>
      <template v-else>{{ bc.display }}</template>
    </li>
    <!-- <button @click="helloFunc">1</button> -->
  </ol>
</template>

<script>
// import store from 'src/vuex/store'

export default {
  // store,
  name: 'breadcrumbs',
  vuex: {
    getters: {
      breadcrumbs: state => state.global.breadcrumbs
    }
  },

  data() {
    return {
    };
  },
  // created() {
  //   console.log('breadcrumbs created', arguments)
  // },
  // methods: {
  //   hello(e) {
  //     console.log(e, this)
  //   }
  // },
  // computed: {
  //   helloFunc() {
  //     console.log(this)
  //     return this.hello.bind(null, 1)
  //   }
  // }
};
</script>

<style lang="css" scoped>
</style>