const productsStore = []

function updateProduct() {
  const code = document.getElementById('code').value
  const name = document.getElementById('name').value
  const color = document.getElementById('color').value
  const weight = document.getElementById('weight').value
  const product = {
    code,
    name,
    color,
    weight
  }
  const productsStore = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
  const response = updateItem(product, productsStore)
  console.log(productsStore)
  localStorage.clear()
  localStorage.setItem('products', JSON.stringify(productsStore))
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const updateItem = (infoItem, itemsStore) => {
  const index = itemsStore.findIndex(item => item.code === infoItem.code)
  if (index === -1) {
    return 'Product not found'
  }
  itemsStore[index] = infoItem
  return 'Update product successfully'
}