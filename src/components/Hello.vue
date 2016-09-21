<template>
  <div class="hello">
    <h1>{{ msg }}!!!</h1>
    <xfield label="test"></xfield>
  </div>
</template>

<script>
import xfield from './xfield'
export default {
  components: {
    xfield
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
