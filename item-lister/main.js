const form = document.querySelector('#addForm')
const itemInput = document.querySelector('#item')
const itemList = document.querySelector('#items')

form.addEventListener('submit',onSubmit)
itemList.addEventListener('click',removeItem)

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

  console.log(itemList)
}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove()
  }

}
