<template>
  <div>
    app home {{message}}
  </div>
</template>

<script>
export default {

  name: 'component_name',

  data() {
    return {

    };
  },
  route: {
    activate(transition) {
      console.log('App Home activated!', transition.to)
      transition.next()
    },
    deactivate(transition) {
      console.log('App Home deactivated!')
      transition.next()
    },
    data(transition) {
      setTimeout(() => {
        transition.next({
          message: 'data fetched!'
        })
      }, 1000)
    }
  }

};
</script>

<style lang="css" scoped>
</style>