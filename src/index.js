import _ from 'lodash'
import './static/css/index.css'
import printMe from './print'

function component () {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello1', 'webpack'], ' ')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe
    element.appendChild(btn)

    return element
}
let element = component();
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function () {
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}