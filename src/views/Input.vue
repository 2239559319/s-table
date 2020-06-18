<template>
  <div class="input">
    <div>
      <textarea cols="30" ref="input"></textarea><br>
      <input
      @click="submit"
      type="button"
      value="提交">
    </div>
  </div>
</template>

<script>
export default {
  name: 's-input',
  methods: {
    submit() {
      sessionStorage.setItem('data', this.$refs.input.value)
      this.$router.push('/table')
    }
  }
}
</script>

<style scoped>
.input {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
input[type="button"] {
  margin-top: 1rem;
}
</style>
