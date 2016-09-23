import Vue from 'vue'
import Keen from 'keen-ui'
import App from './App'

// import $ from 'jquery'
// import 'jquery-ui'
/* eslint-disable no-new */

Vue.use(Keen)

new Vue({
  el: 'body',
  components: { App },
  ready () {
    // console.log($('div').draggable().resizable())
  }
})
