import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'

if (process.browser) {
  const OnsenUI = require('vue-onsenui')
  Vue.use(OnsenUI)
}
