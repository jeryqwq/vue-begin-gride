<template>
  <svg
    style="
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999;
      min-width: 100vw;
      min-height: 100vh;
    "
    v-if="curIdx < lists.length"
  >
    <BorderRect
      v-for="(item, idx) in lists || []"
      :key="idx"
      :idx="idx"
      :item="item"
      :curIdx="curIdx"
      :incrment="incrment"
      :opacity="opacity"
      :len="lists.length"
    />
    <Point :len="lists.length" :curIdx="curIdx" :incrment="incrment" />
  </svg>
</template>

<script>
import BorderRect from "./rect.js"
import Point from "./points.vue"

export default {
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
    opacity: {
      type: Number,
      default: 0.4,
    },
  },
  components: {
    BorderRect,
    Point,
  },
  data() {
    return {
      curIdx: 0,
      position: {
        width: 0,
        height: 0,
      },
    }
  },

  mounted() {
    this.$nextTick().then(() => {
      this.position = document.documentElement.getClientRects()[0]
    })
  },
  watch: {
    lists() {
      const isfingerPoint = window.sessionStorage.getItem("isfingerPoint")
      isfingerPoint &&
        isfingerPoint === "true" &&
        (this.curIdx = this.lists.length)
    },
    deep: true,
  },
  methods: {
    incrment(idx) {
      this.curIdx = idx
      if(idx >= this.lists.length) {
        this.$emit('destory')
      }
    },
  },
}
</script>
