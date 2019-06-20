import _ from 'lodash'
const createElement = () => {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['123','456'])
    return dom
}
const divs = createElement()
document.body.appendChild = divs