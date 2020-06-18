<template>
  <div class="week">
    {{day}}
  </div>
</template>

<script>
export default {
  props: ['day'],
  name: 's-week'
}
</script>

<style scoped>
.week {
  grid-column: span 2;
  text-align: center;
  line-height: 100%;
}
</style>
