<template>
  <div style='text-align: center'>
    <H2>{{name}}</H2>
    <p v-if='configs.length === 0'>还没有收录此和弦。</p>
    <chord v-for='config of configs'
           :instrument='instrument'
           :alpha='alpha'
           :type='type'
           :modifier='modifier'
           :pitch='pitch'
           :spec='spec'
           :root-key='rootKey'
           :width='width'
           :config='config'
           :display-title='displayTitle'>
    </chord>
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

    };
  },

  computed: {
    name() {
      return ChordUtil.chordName(this.alpha, this.modifier, this.type, this.pitch, this.spec, this.rootKey)
    },
    configs() {
      return ChordUtil.getConfigs(this.instrument, ChordUtil.chordName(this.alpha, this.modifier, this.type, this.pitch, this.spec, this.rootKey))
    }
  },

  methods: {

  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>