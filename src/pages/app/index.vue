<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: 'app',

  data() {
    return {

    };
  },
  route: {
    activate(transition) {
      console.log('App activated!')
      transition.next()
    },
    deactivate(transition) {
      console.log('App deactivated!')
      transition.next()
    }
  }
};
</script>

<style lang="css" scoped>
</style>