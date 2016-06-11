<template>
  <div>
    Homepage
    <a href="#" v-link="{path:'bar'}">Goto Bar</a>
    <a href="#" v-link="{path:'foo'}">Goto Foo</a>
  </div>
</template>

<script>
  export default {
    name: 'home',

    route: {
      canActivate(transition) {
        console.log('canActivate')
        return true
      },
      activate(transition) {
        console.log('Home activated!')
        transition.next()
      },
      canDeactivate(transition) {
        console.log('canDeactivate');
        return true
      },
      deactivate(transition) {
        console.log('Home deactivated!')
        transition.next()
      }
    }
  }
</script>
