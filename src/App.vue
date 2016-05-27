<template>
  <div id="app">
    <a v-link="{ path: '/' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
    <router-view class="view" transition="test" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
.view {
  transition: all 0.0s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
</style>
