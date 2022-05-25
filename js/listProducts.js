const productsStore = []

function listProducts() {
  const productsStore = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
  const response = listItems(productsStore)
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const listItems = (itemsStore) => {
  const list = itemsStore.map(item => {
    return `<ul>
      <li> ID ${item.code}</li>
      <li> NOMBRE ${item.name}</li>
      <li> COLOR ${item.color}</li>
      <li> PESO ${item.weight}</li>
    </ul>`
  }
  )
  return list.join('')
}

function totalProducts() {
  const productsStore = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
  const response = totalItems(productsStore)
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const totalItems = (itemsStore) => {
  return "En total se tienen " + itemsStore.length + " productos"
}