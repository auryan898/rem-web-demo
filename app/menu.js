var yo = require('yo-yo')

module.exports = createMenu

function createMenu (items, onChange, initialActive) {
  var active = initialActive
  var list = render()
  return list

  function render () {
    return yo`<ul class='menu'>${items.map(renderItem)}</ul>`
  }

  function renderItem (item, i) {
    return yo`<li class=${item === active ? 'active' : ''}
                  onclick=${onClick}>${item.name}</li>`
  }

  function onClick (e) {
    var li = e.currentTarget
    for (var i = 0; i < list.childNodes.length; i++) {
      if (list.childNodes[i] === li) { break }
    }
    active = items[i]
    yo.update(list, render())
    return onChange(active)
  }
}
