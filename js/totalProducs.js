

function listProducts() {
  const productsStore = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
  const response = totalItems(productsStore)
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const totalItems = (itemsStore) => {
  return "En total se tienen" + itemsStore.length + "productos"
}