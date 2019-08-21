import _ from 'lodash'
import './style.css'
import bwImg from './bwImg.png'

function component () {
    var element = document.createElement('div')

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    // 将图像添加到现有的div
    var bwImg = new Image();
    bwImg.src = bwImg
    element.appendChild(bwImg)

    return element
}

document.body.appendChild(component())