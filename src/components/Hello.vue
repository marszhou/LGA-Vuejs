<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-show="show" transition="bounce">Look at me!</span>
    <button @click="toggle" class='btn'>toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    // console.log(process.env, __ENV__)
    // debugger
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      show: true
    }
  },
  methods: {
    toggle() {
      console.log(this.$parent, this.$root)
      this.show = !this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}

.bounce-transition {
  display: inline-block; /* 否则 scale 动画不起作用 */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
