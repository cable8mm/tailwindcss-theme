import Alpine from 'alpinejs'
import Focus from '@alpinejs/focus'

import '../css/app.css'

import { toDarkMode, toLightMode, toSystemMode } from './components/theme'

import './clipboard'

window.Alpine = Alpine

Alpine.plugin(Focus)
Alpine.start()

window.toDarkMode = toDarkMode
window.toLightMode = toLightMode
window.toSystemMode = toSystemMode

document.addEventListener('DOMContentLoaded', () => {
  import('./docs.js')
  import('./components/accessibility')
})
