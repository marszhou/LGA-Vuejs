<template>
  <div>
    <div>bar!!</div>
    <alert type="warning" dismissable>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </alert>
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