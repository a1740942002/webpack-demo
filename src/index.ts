import * as _ from 'lodash'
import './index.css'

function component() {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())

console.log('index.js')
