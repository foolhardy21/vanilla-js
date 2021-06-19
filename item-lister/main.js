const form = document.querySelector('#addForm')
const itemInput = document.querySelector('#item')
const itemList = document.querySelector('#items')
const filter = document.querySelector('#filter')

form.addEventListener('submit',onSubmit)
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems)

function onSubmit(e) {
  e.preventDefault()

  const itemText = itemInput.value

  if(!itemText) {
    window.alert('Enter the item')
    return
  }

  const removeButton = document.createElement('button')
  removeButton.appendChild(document.createTextNode('X'))
  removeButton.setAttribute('class','btn btn-danger btn-sm float-right delete')

  const itemLi = document.createElement('li')
  itemLi.appendChild(document.createTextNode(`${itemText}`))
  itemLi.appendChild(removeButton)
  itemLi.setAttribute('class','list-group-item')

  itemList.appendChild(itemLi)

}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }
}

function filterItems(e) {

  const filterText = filter.value.toLowerCase()

  const items = document.querySelectorAll('li')

  items.forEach((item) => {
    let listItemText = item.innerText.split('\n')[0].toLowerCase()

    if(!listItemText.includes(filterText)) {
      item.style.display='none'
    }
    else item.style.display = 'block'

  })
}
