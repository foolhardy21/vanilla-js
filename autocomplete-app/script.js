const inputText = document.querySelector('#search')
const displayStates = document.querySelector('#match-list')

inputText.addEventListener('input',() => fetchItems(inputText.value))

const fetchItems = async (searchValue) => {

    const response = await fetch('./data/states.json')
    const data  = await response.json()

    const displayItems = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

    if(displayItems.length > 0) {

      const html = displayItems.map(item => {
       return  `<div class='card card-body mb-1'>
          <h4>${item.name} ${item.abbr} <span class='text-primary'>
            ${item.capital}
          </span></h4>
          <small>Lat: ${item.lat} / Long: ${item.long}</small>
        </div>`
      }).join('')
      displayStates.innerHTML = html
    }
    else {
      displayStates.innerHTML = ''
    }


}
