const productsStore = []

function listProducts() {
  const response = listItems(productsStore)
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const listItems = (itemsStore) => {
  const list = itemsStore.map(item => {
    return `<ul>
      <li>${item.code}</li>
      <li>${item.name}</li>
      <li>${item.color}</li>
      <li>${item.weight}</li>
    </ul>`
  }
  )
  return list.join('')
}