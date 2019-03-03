import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import marked from 'marked'

Vue.config.productionTip = false

import '@/assets/scss/common.scss'

Vue.component("page-single", () => import('@/components/PageSingle.vue'))

Vue.filter('md', function (value) {
    if (!value) return ''
    return marked(value)
})

Vue.directive('md', {
    bind: (el, binding) => {
        // 要素にフォーカスを当てる
        el.innerHTML = marked(binding.value)
    }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
