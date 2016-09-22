<template>
  <div class="field">
    <label>
      {{ label }}
      <input type="text" placeholder="{{ msg }}" />
    </label>
  </div>
</template>

<script>
var $ = require('jquery')
require('../../node_modules/jquery-ui/ui/widgets/draggable')
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: $.toString() + 'Go Jonny Go!'
    }
  },
  props: {
    'label': {
      required: true,
      type: String
    }
  },
  ready () {
    var self = this
    $(function () {
      console.log($(self.$el).draggable())
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
