<template>
  <foreignObject style="width: 100%; height: 40px;">
    <div class="center-point">
      <span
        :class="`item ${idx === curIdx && 'cur'}`"
        v-for="(item, idx) in new Array(this.len).fill(0)"
        :key="idx"
        @click="toggleTo(idx)"
      ></span>
    </div>
  </foreignObject>
</template>

<script>
export default {
  props: ["len", "curIdx", "incrment"],
  data() {
    return {}
  },
  methods: {
    toggleTo(idx) {
      this.incrment(idx)
    },
  },
}
</script>
<style scoped>
.center-point {
  display: flex;
  width: 100%;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.center-point > .item {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: gray;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.5s;
}
.center-point > .item.cur {
  background: white;
  width: 20px;
}
</style>
