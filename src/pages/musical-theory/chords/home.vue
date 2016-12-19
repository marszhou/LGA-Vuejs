<template>
  <div>
    <chord-search-form @chord-form:change='formChange'></chord-search-form>
    <chords :alpha='chord.alpha'
            :pitch='chord.pitch'
            :spec='chord.spec'
            :modifier='chord.modifier'
            :type='chord.type'
            :root-key='chord.rootKey'
            :width='200'
            v-if='chord'></chord>
  </div>
</template>

<script>
import ChordSearchForm from 'components/chord-search-form'
import Chords from 'components/chords'

export default {

  name: 'component_name',

  components: {
    ChordSearchForm, Chords
  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {
      chord: null
    };
  },

  computed: {

  },

  methods: {
    formChange(value) {
      console.log(value)
      this.chord = value
    }
  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>
