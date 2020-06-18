<template>
  <div
  class="course"
  :style="style">
    <span>{{data.teacher}}</span><br>
    <span>{{data.courseName}}</span><br>
    <span>{{data.duration}}</span><br>
    <span>{{data.place}}</span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      required: true,
      type: String
    },
    swidth: {
      default: 2,
      required: false,
      type: Number
    },
    slength: {
      required: true,
      type: Number
    },
    offset: {
      required: false,
      type: Number,
      default: 0
    },
    week: {
      required: true,
      type: Number
    },
    start: {
      required: true,
      type: Number
    },
    data: {
      required: true,
      type: Object
    }
  },
  name: 's-course',
  computed: {
    style() {
        return {
          gridRowStart: this.start + 1,
          gridRowEnd: this.start + 1 + this.slength,
          gridColumnStart: this.week * 2 + this.offset,
          gridColumnEnd: this.week * 2 + this.swidth,
          backgroundColor: this.color
        }
    }
  }
}
</script>

<style scoped>
.course {
  padding: .5rem;
  width: 100%;
  border-radius: .5rem;
  background-clip: padding-box;
  justify-self: center;
  text-align: center;
  overflow-wrap: break-word;
}
</style>
