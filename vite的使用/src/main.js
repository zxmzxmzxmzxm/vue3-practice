import { sum } from './js/math.js'
import './css/style.css'
import './css/title.less'
import mul from './ts/mul'
import {createApp} from 'vue'
import App from './vue/App.vue'

console.log(sum(20,30))

const titleElv = document.createElement('div')
titleElv.className = 'title'
titleElv.innerHTML = '实验'
document.body.appendChild(titleElv)

console.log(mul(2,5))

createApp(App).mount('#app')
