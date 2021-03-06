const form = document.querySelector('#my-form')
const errorMessage = document.querySelector('.msg')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const userList = document.querySelector('#users')

form.addEventListener('submit',onSubmit)

function onSubmit(e) {
  e.preventDefault()

  const name = nameInput.value
  const email = emailInput.value

  if(!name || !email) {
  errorMessage.classList.add('error')
  errorMessage.textContent = 'Enter the details'

    setTimeout(() => {
      errorMessage.classList.remove('error')
      errorMessage.textContent = ''
    },2000)
  } else {
    const userLi = document.createElement('li')
    userLi.appendChild(document.createTextNode(`${name} : ${email}`))

    userList.appendChild(userLi)

    nameInput.value=''
    emailInput.value=''
  }

}
