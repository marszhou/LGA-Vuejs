<template>
  <span>
    <span class='dialog-trigger'>
      <slot name='trigger'></slot>
    </span>

    <div class="modal fade" :id="dialogId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot name='dialog-body'></slot>
          </div>
          <div class="modal-footer">
            <button v-for='button of buttons'
                    type="button"
                    class="btn btn-{{button.type}}"
                    data-dismiss="modal">
              {{button.label}}
            </button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
// import {uniqueKey} from 'utils'

// import jQuery from 'jquery'

export default {

  name: 'dialog',

  props: {
    title: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => [
        {label: '关闭', type: 'default'},
        {label: '保存', type: 'primary'},
      ]
    },
    dialogId: {
      type: String,
      required: true
    },

    autoShow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {

    };
  },

  methods: {
    $dialog() {
      return $('#' + this.dialogId)
    },
    show() {
      this.$dialog().modal()
    },
    toggle() {
      this.$dialog().model('toggle')
    },
    close() {
      this.$dialog().model('hide')
    },
    hide() {
      this.close()
    },

    handleShow() {
      console.log('dialog show')
    },
    handleShown() {
      console.log('dialog shown')
    },
    handleHide() {
      console.log('dialog hide')
    },
    handleHidden() {
      console.log('dialog hidden')
    }
  },

  created() {

  },

  attached() {
    this.$dialog().on('show.bs.modal', this.handleShow)
                  .on('shown.bs.modal', this.handleShown)
                  .on('hide.bs.modal', this.handleHide)
                  .on('hidden.bs.modal', this.handleHidden)

    // console.log('created', this.$el, jQuery(this.$el).children('.dialog-trigger').children())
    $(this.$el).children('.dialog-trigger')
                    .children()
                    .attr('data-toggle', 'modal')
                    .attr('data-target', `#${this.dialogId}`)
    if (this.autoShow) {
      this.show()
    }
  },

  beforeDestroy() {
    this.$dialog().off('show.bs.modal')
                  .off('shown.bs.modal')
                  .off('hide.bs.modal')
                  .off('hidden.bs.modal')
  }
};
</script>

<style lang="css" scoped>
</style>