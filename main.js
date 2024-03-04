import './style.css'
import { clickButton } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div id="container">
    <h1>Griddy is not availabe 😔😔😔</h1>
    <div class="card">
    </div>
  </div>
`

clickButton(document.querySelector('#container'))
