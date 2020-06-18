<template>
  <div
  class="number"
  :style="style">
    {{number}}
  </div>
</template>

<script>
export default {
  props: ['number', 'start', 'length'],
  name: 's-tag',
  computed: {
    style() {
      return {
        gridRowStart: this.start,
        gridRowEnd: this.start + this.length
      }
    }
  }
}
</script>

<style scoped>
.number {
  justify-self: center;
  align-self: center;
}
</style>
