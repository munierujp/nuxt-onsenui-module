import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import OnsenUI from 'vue-onsenui'

if (process.browser) {
  Vue.use(OnsenUI)
}
