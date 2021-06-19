const form = document.querySelector('#addForm')
const itemInput = document.querySelector('#item')
const list = document.querySelector('.list-group')

form.addEventListener('submit',onSubmit)

function onSubmit(e) {
  e.preventDefault()

  const itemText = itemInput.value

  if(!itemText) {
    window.alert('Enter the item')
  }

  const removeButton = document.createElement('button')
  removeButton.innerText = 'X'
  removeButton.setAttribute('class','btn btn-danger btn-sm float-right delete')

  const itemLi = document.createElement('li')
  itemLi.appendChild(document.createTextNode(`${itemText}`))
  itemLi.appendChild(removeButton)
  itemLi.setAttribute('class','list-group-item')

  list.appendChild(itemLi)

  console.log(list)
}
