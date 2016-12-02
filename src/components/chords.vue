<template>
  <div>
    <chord v-for='config of configs'
           :instrument='instrument'
           :alpha='alpha'
           :type='type'
           :modifier='modifier'
           :pitch='pitch'
           :spec='spec'
           :root-key='rootKey'
           :width='width'
           :config='config'>
    </chord>
    {{name | json}}
  </div>
</template>

<script>
import ChordUtil from 'utils/chord'

import Chord from 'components/chord'

export default {

  name: 'chords',

  props: _.assign(ChordUtil.commonProps(),{}),

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
      name: ChordUtil.chordName(this.alpha, this.modifier, this.type, this.pitch, this.spec, this.rootKey),
      configs: ChordUtil.getConfigs(this.instrument, ChordUtil.chordName(this.alpha, this.modifier, this.type, this.pitch, this.spec, this.rootKey))
    };
  },

  computed: {

  },

  methods: {

  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>