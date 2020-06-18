<template>
  <div class="table">
    <div></div>
    <s-week
    v-for="(day, index) in weekday"
    :key="index"
    :day=day
    ></s-week>
    <s-tag
    v-for="v in classes"
    :key="v + 10"
    :number="v"
    :start="v + 1"
    :length="1"
    ></s-tag>
    <s-course
    v-for="v in courses"
    :key="v.data.place"
    :color="colors[Math.floor(Math.random() * colors.length)]"
    :swidth="v.swidth"
    :slength="v.slength"
    :week="v.week"
    :start="v.start"
    :data="v.data"
    :offset="v.offset ? v.offset : 0"
    ></s-course>
  </div>
</template>

<script>
import SWeek from './SWeek'
import STag from './STag'
import SCourse from './SCourse'

export default {
  name: 's-table',
  components: {
    SWeek,
    STag,
    SCourse
  },
  computed: {
    courses() {
      const dup = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
      const offsets = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
      
      const msg = JSON.parse(sessionStorage.getItem('data'))
      const lists = msg.dateList[0]['selectCourseList']
      const cs = lists.reduce((acc, v, i) => {
        for(let i = 0, length = v.timeAndPlaceList ? v.timeAndPlaceList.length : 0; i < length; i++) {
          acc.push({
            data: {
              courseName: v.courseName,
              teacher: v.attendClassTeacher.replace('*', ''),
              duration: v.timeAndPlaceList[i].weekDescription,
              place: v.timeAndPlaceList[i].campusName +  v.timeAndPlaceList[i].teachingBuildingName +  v.timeAndPlaceList[i].classroomName
            },
            swidth: 2,
            slength: v.timeAndPlaceList[i].continuingSession,
            week: v.timeAndPlaceList[i].classDay,
            start: v.timeAndPlaceList[i].classSessions
          })
          for(let j = v.timeAndPlaceList[i].classSessions; j < v.timeAndPlaceList[i].classSessions + v.timeAndPlaceList[i].continuingSession; j++) {
            dup[v.timeAndPlaceList[i].classDay][j]++;
          }
        }
        return acc
      }, [])
      for(const course of cs) {
        for(let i = course.start; i < course.start + course.slength; i++) {
          dup[course.week][i] !== 1 && (course.swidth = 1)
          dup[course.week][i] !== 1 && (offsets[course.week][i]++) && (course.offset = offsets[course.week][i] - 1)
        }
      }
      return cs
    }
  },
  data() {
    return {
      colors: ['#add8e6', '#f2d7e1', '#b0e6d1', '#a9d6ff', '#f3b6a7'],
      weekday: ['1', '2', '3', '4', '5', '6', '7'],
      classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

<style scoped>
.table {
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  width: 900px;
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: repeat(15, 1fr);
}
.week {
  grid-column: span 2;
  text-align: center;
}
.number {
  grid-row: 1 span;
}
</style>
