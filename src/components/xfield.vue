<template>
<div class="field ui-widget">
<label>
  {{ label }}
  <input type="text" placeholder="" v-model="model" />
</label>
</div>
</template>

<script>
// var $ = require('jquery')
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
// require('jquery-ui/ui/widgets/draggable')  // Same as: import 'jquery-ui/ui/widgets/draggable'
require('jquery-ui/ui/widgets/resizable')
require('jquery-ui/themes/base/core.css')
require('jquery-ui/themes/base/resizable.css')
require('jquery-ui/themes/base/draggable.css')
// require('jquery-ui/themes/base/theme.css')
// import $ from 'jquery'
import 'jquery-ui'
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
    },
    'model': {
      required: true
    }
  },
  ready () {
    var self = this
    var $el = $(self.$el)

    // Make Draggable
    $el.draggable({
      stack: '.card',
      // handle: '.drag-handle',
      snap: true,
      // grid: [50, 50],
      opacity: 0.45,
      snapMode: 'outer',	// inner outer both
      snapTolerance: 5,
      start: function (event, ui) {
        $el.removeClass('z-depth-2')
        $el.addClass('z-depth-4')
      },
      stop: function (event, ui) {
        $el.removeClass('z-depth-4')
        $el.addClass('z-depth-2')
      }
    })

    // Make Resizable
    $el.resizable({
      ghost: true,
      // animate: true,
      // animateDuration: 'fast',
      // animateEasing: 'easeOutBounce',
      // grid: [10, 10],
      containment: $('body'),
      // autoHide: true,
      handles: 'all',
      helper: '.resizable-helper'
    })
    // $(function () {
    //   //  console.log($(self.$el).draggable())
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
  border:2px solid red;
  }
h1 {
  color: #42b983;
}
</style>
