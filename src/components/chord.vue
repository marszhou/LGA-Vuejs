<template>
<div>
  <svg :width='width' :height='height'>
    <text class='name' :x='width / 2' y='48' text-anchor='middle' style='fill: #999999; stroke: #000000;  font-size: 40px;'>{{name}}</text>
    <g :x='innerX' :y='innerY' :transform='innerTransform' style="stroke:rgb(0,0,0);"  :style='{strokeWidth: strokeWidth}'>
      <rect v-el:bg :width="innerWidth" :height="innerHeight" style="fill:white;"/>
      <line class='strings' :x1="innerWidth/6 * i" y1="0" :x2="innerWidth/6 * i" :y2="innerHeight" v-for='i of strings'/>
      <line class='frets' x1='0' :x2='innerWidth' :y1='innerHeight / 3 * i' :y2='innerHeight / 3 * i' v-for='i of frets'/>
    </g>
  </svg>
</div>
</template>

<script>
import ChordUtil from 'utils/chord'

export default {

  name: 'chord',

  props: _.assign(ChordUtil.commonProps(), {
    lowKey: {
      type: String,
      default: ''
    },
    startFret: {
      type: Number,
      default: 0
    },
    disabledString: {
      type: Array,
      default: function()  {
        return []
      }
    }
  }),

  components: {

  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {
      strings: _.range(this.instrument === 'guitar' ? 6 : 4),
      frets: _.range(3)
    };
  },

  computed: {
    height() {
      return this.width / 3 * 4
    },
    paddingLeft() {
      return this.width / 10
    },
    paddingRight() {
      return this.width / 10
    },
    paddingTop() {
      return this.height / 5
    },
    paddingBottom() {
      return this.height / 10
    },
    innerWidth() {
      return this.width - this.paddingLeft - this.paddingRight
    },
    innerHeight() {
      return this.height - this.paddingTop - this.paddingBottom
    },
    innerX() {
      return this.paddingLeft
    },
    innerY() {
      return this.paddingTop
    },
    innerTransform() {
      return `translate(${this.innerX}, ${this.innerY})`
    },
    strokeWidth() {
      return this.width / 30
    },
    name() {
      return ChordUtil.chordName(this.alpha, this.modifier, this.type, this.pitch, this.spec, this.lowKey)
    },
    configs() {
      return ChordUtil.configs[this.instrument][this.name] || []
    }
  },

  methods: {

  },

  route: {

  },

  ready() {

  }
};
</script>

<style lang="css" scoped>
</style>