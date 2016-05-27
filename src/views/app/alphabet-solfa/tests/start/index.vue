<template>
  <div>
    test start {{$route.params.test_id}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: 'component_name',

  data() {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
</style>