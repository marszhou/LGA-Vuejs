<template>
  <div>
    <div>bar!!</div>
    <alert type="warning" dismissable>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert>
    <a href="#" v-link="{path:'home'}">Back to home</a>
  </div>
</template>

<script>
  import {alert} from 'vue-strap'
  export default {
    components: {
      alert
    }
  }
</script>