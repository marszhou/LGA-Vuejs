<template>
  <form class='form-horizontal'>
    <form-group label='调性' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='alpha'>
        <option v-for='label of alphas' :value='label'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='低音' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='lowKey'>
        <option v-for='(value, label) of lowKeys' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='音高' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='pitch' >
        <option v-for='(value, label) of pitches' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='类型' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='type'>
        <option v-for='(value, label) of types' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='类别' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='spec'>
        <option v-for='(value, label) of specs' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <form-group label='修饰符' layout-target='xs' :title-column-width='3' :value-column-width='9'>
      <select class='form-control' v-model='modifier'>
        <option v-for='(value, label) of modifiers' :value='value'>
          {{label}}
        </option>
      </select>
    </form-group>

    <div class="form-group">
      <div class='col-md-offset-2 col-md-2 col-xs-offset-0 col-xs-12'>
        <button type="button"
                class="btn btn-info btn-block"
                @click='handleSearch'>
           查看
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
      lowKeys: Music.getTwelveWithSharpSpecs(),
      lowKey: ''
    };
  },

  computed: {

  },

  methods: {
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
          lowKey: this.lowKey
        }
      })
    }
  },

  route: {

  }
};
</script>

<style lang="css" scoped>
</style>
