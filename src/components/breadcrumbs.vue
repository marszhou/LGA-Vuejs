<template>
  <ol class="breadcrumb">
    <li><a href="#" v-link="{name: 'home'}">Home</a></li>
    <li v-for="bc in data" track-by='name'>
      <a href='#' v-link="{name: bc.name}" v-if='!!bc.name'>{{ bc.display }}</a>
      <template v-else>{{ bc.display }}</template>
    </li>
  </ol>
</template>

<script>
export default {

  name: 'breadcrumbs',
  props: ['data'],

  data() {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>