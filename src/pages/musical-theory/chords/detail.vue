<template>
  <div>
    <chord :alpha='$route.params.alpha'
           :pitch='$route.query.pitch'
           :spec='$route.query.spec'
           :modifier='$route.query.modifier'
           :type='$route.query.type'
           :low-key='$route.query.lowKey'
            ></chord>

  </div>
</template>

<script>
import * as d3 from 'd3'
import Chord from 'components/chord'

export default {

  name: 'component_name',

  components: {
    Chord
  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {

    };
  },

  computed: {

  },

  methods: {

  },

  ready() {
    // var circle = d3.selectAll("circle");
    // circle.style("fill", "steelblue");
    // circle.attr("r", 30);
  },

  route: {
    data() {
      console.log(this.$route);
      console.log(this.$el);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
