<template>
  <form class='form-horizontal'  @reset.prevent='handleReset'>
    <form-group label='调性' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='alpha' @change='handleChange' @reset='handleReset()'>
        <option v-for='label of alphas' :value='label'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='根音' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='rootKey' @change='handleChange'>
        <option v-for='(value, label) of rootKeys' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='音高' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='pitch'  @change='handleChange'>
        <option v-for='(value, label) of pitches' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='类型' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='type' @change='handleChange'>
        <option v-for='(value, label) of types' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='类别' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='spec' @change='handleChange'>
        <option v-for='(value, label) of specs' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='修饰符' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='modifier' @change='handleChange'>
        <option v-for='(value, label) of modifiers' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <div class="form-group">
      <div class='col-md-offset-3 col-md-9 col-xs-offset-0 col-xs-12'>
        <!-- <button type="button"
                class="btn btn-info btn-block"
                @click='handleSearch'>
           查看
        </button> -->
        <button type='reset' class='btn btn-remove btn-block'>
          RESET
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import FormGroup from 'components/form-group'
import * as Music from 'utils/music'

export default {

  name: 'component_name',

  components: {
    FormGroup
  },

  vuex: {
    actions: {

    },
    getters: {

    }
  },

  data() {
    return {
      alphas: Music.getMajors(),
      alpha: 'C',
      pitches: Music.getChordPitches(),
      pitch: '',
      types: Music.getChordTypes(),
      type: 'major',
      specs: Music.getChordSpecs(),
      spec: 3,
      modifiers: Music.getChordModifiers(),
      modifier: '',
      rootKeys: Music.getTwelveWithSharpSpecs(),
      rootKey: ''
    };
  },

  computed: {
    value() {
      return {
        alpha: this.alpha,
        pitch: this.pitch,
        type: this.type,
        spec: this.spec,
        modifier: this.modifier,
        rootKey: this.rootKey
      }
    }
  },

  methods: {
    handleReset(e) {
      // console.log('reset', e)
      this.alpha = 'C'
      this.pitch = ''
      this.type = 'major'
      this.spec = 3
      this.modifier = ''
      this.rootKey = ''
      this.handleChange()
    },
    handleChange() {
      console.log('change', this.value)
      this.$dispatch('chord-form:change', this.value)
    },
    handleSearch() {
      this.$route.router.go({
        name: 'chord-detail',
        params: {
          alpha: this.alpha
        },
        query: {
          pitch: this.pitch,
          type: this.type,
          spec: this.spec,
          modifier: this.modifier,
          rootKey: this.rootKey
        }
      })
    }
  },

  ready() {
    this.handleChange()
  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>
