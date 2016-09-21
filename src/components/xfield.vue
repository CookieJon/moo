<template>
  <div class="field">
    <label>
      {{ label }}
      <input type="text" placeholder="I'm waiting" />
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Go Jonny Go!'
    }
  },
  props: {
    'label': {
      required: true,
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
