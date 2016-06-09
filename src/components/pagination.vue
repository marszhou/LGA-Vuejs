<template>
<nav class='text-center'>
  <ul class="pagination">
    <li v-if='hasPrevious'>
      <a href="#" aria-label="Previous" @click='handlePrevious'>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <template v-if='hasFirst'>
      <li><a href='#' @click='handlePageClick(1, $event)'>1</a></li>
      <li><span>...</span></li>
    </template>
    <li v-for='page of displayedPages'><a href="#" @click='handlePageClick(page, $event)'>{{page}}</a></li>

    <template v-if='hasLast'>
      <li><span>...</span></li>
      <li><a href='#' @click='handlePageClick(pageCount, $event)'>{{pageCount}}</a></li>
    </template>

    <li v-if='hasNext'>
      <a href="#" aria-label="Next" @click='handleNext'>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>

import {toNumber} from 'utils'
import {Pagination as events} from './consts/events'

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

    maxPage: {
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
    handlePrevious() {
      --this.current
    },
    handleNext() {
      ++this.current
    }

  },

  data() {
    return {
      current: this.currentPage || 1
    }
  },

  computed: {
    displayedPages() {
      return [5,6,7,8,9]
    },
    hasNext() {
      return true
    },
    hasPrevious() {
      return true
    },
    hasFirst() {
      return true
    },
    hasLast() {
      return true
    },
    pageCount() {
      return Math.floor(this.recordCount / this.pageSize) + ((this.recordCount % this.pageSize === 0) ? 0 : 1)
    }
  }
};
</script>

<style lang="css" scoped>
</style>