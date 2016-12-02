<template>
  <svg :width='width' :height='height'>
    <text class='name' :x='width / 2' y='48' text-anchor='middle' style='fill: #999999; stroke: #000000;  font-size: 40px;'>{{name}}</text>
    <g :x='innerX' :y='innerY' :transform='innerTransform' style="stroke:rgb(0,0,0);"  :style='{strokeWidth: strokeWidth}'>
      <rect v-el:bg :width="innerWidth" :height="innerHeight" style="fill:white;"/>
      <line class='strings' :x1="innerWidth/(strings.length-1) * i" y1="0" :x2="innerWidth/(strings.length-1) * i" :y2="innerHeight" v-for='i of strings'/>
      <line class='frets' x1='0' :x2='innerWidth' :y1='innerHeight / frets.length * i' :y2='innerHeight / frets.length * i' v-for='i of frets'/>

      <circle :cx='innerWidth / (strings.length - 1) * (strings.length - position[0])'
              :cy='innerHeight / frets.length * (position[1] - config.start - 1) + 3/5 * innerHeight / frets.length'
              :r='positionRadius' v-for='position of holdPositions'></circle>
    </g>
  </svg>
</template>

<script>
import ChordUtil from 'utils/chord'

export default {

  name: 'chord',

  props: _.assign(ChordUtil.commonProps(), {
    config: {
      type: Object,
      default: {}
    }
    // startFret: {
    //   type: Number,
    //   default: 0
    // },
    // disabledString: {
    //   type: Array,
    //   default: function()  {
    //     return []
    //   }
    // }
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
      // frets: _.range(3)
      frets: _.range(ChordUtil.getChordFretScale(this.config))
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
      return this.width / 40
    },
    name() {
      return ChordUtil.chordName(this.alpha, this.modifier, this.type, this.pitch, this.spec, this.rootKey)
    },
    configs() {
      return ChordUtil.configs[this.instrument][this.name] || []
    },
    positionRadius() {
      return this.width / 20
    },
    holdPositions() {
      return _.reduce(this.config.positions, (ret, p, i) => {
        if ((p+'').toUpperCase() !== 'X' && p !== 0) {
          ret.push([i + 1, p]) // [string index, fret index] , index starts from 1, not 0
        }
        return ret
      }, [])
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