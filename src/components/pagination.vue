<template>
<nav class='text-center'>
  <ul class="pagination">
    <li v-if='hasPrevious'>
      <a href="#" aria-label="Previous" @click.prevent.stop='handlePrevious'>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <template v-if='hasFirst'>
      <li><a href='#' @click='handlePageClick(1, $event)'>1</a></li>
      <li v-if='hasFirstEllipsis'><span>...</span></li>
    </template>

    <li v-for='page of displayedPages'>
      <a href="#" v-if='page !== current' @click.prevent.stop='handlePageClick(page, $event)'>{{page}}</a>
      <span v-else class='page-current'>{{page}}</span>
    </li>

    <template v-if='hasLast'>
      <li v-if='hasLastEllipsis'><span>...</span></li>
      <li><a href='#' @click.prevent.stop='handlePageClick(pageCount, $event)'>{{pageCount}}</a></li>
    </template>

    <li v-if='hasNext'>
      <a href="#" aria-label="Next" @click.prevent.stop='handleNext'>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>

import {toNumber} from 'utils'
import {PaginationEvents as events} from './consts/events'

export default {

  name: 'pagination',

  props: {
    recordCount: {
      type: Number,
      default: 0,
      coerce: toNumber
    },

    pageSize: {
      type: Number,
      default: 20,
      coerce: toNumber
    },

    rangeSize: {
      type: Number,
      default: 5,
      coerce: toNumber
    },

    currentPage: {
      type: Number,
      default: 1,
      coerce: toNumber
    }
  },

  methods: {
    handlePageClick(page) {
      this.current = page
      this.$$dispatch(events.Page, arguments)
    },
    handlePrevious(e) {
      this.current = this.current - 1
      this.$$dispatch(events.Page, [this.current, e]);
    },
    handleNext(e) {
      this.current = this.current + 1
      this.$$dispatch(events.Page, [this.current, e]);
    }
  },

  data() {
    return {
      current: this.currentPage || 1
    }
  },

  computed: {
    displayedPages() {
      let begin = this.current - Math.floor(this.rangeSize / 2)
      if (begin < 1) {
        begin = 1
      }
      let end = begin + this.rangeSize
      if (end > this.pageCount) {
        end = this.pageCount + 1
        begin = end - this.rangeSize
        if (begin < 1) {
          begin = 1
        }
      }
      return _.range(begin, end)
    },
    hasNext() {
      let next = this.current + 1
      return next <= this.pageCount
    },
    hasPrevious() {
      let previous = this.current - 1
      return previous >= 1
    },
    hasFirst() {
      return !_.contains(this.displayedPages, 1)
    },
    hasFirstEllipsis() {
      return _.first(this.displayedPages) - 1 > 1
    },
    hasLast() {
      return !_.contains(this.displayedPages, this.pageCount)
    },
    hasLastEllipsis() {
      return this.pageCount - _.last(this.displayedPages) > 1
    },
    pageCount() {
      return Math.floor(this.recordCount / this.pageSize) + ((this.recordCount % this.pageSize === 0) ? 0 : 1)
    }
  }
};
</script>

<style lang="css" scoped>
.page-current {
  font-weight: bold;
  color: red;
}
</style>