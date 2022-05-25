

function deleteProduct() {
  const code = document.getElementById('code').value
  const productsStore = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
  const response = deleteItem(code, productsStore)
  localStorage.clear()
  localStorage.setItem('products', JSON.stringify(productsStore))
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const deleteItem = (idItem, itemsStore) => {
  const index = itemsStore.findIndex(item => item.code === idItem)
  if (index === -1) {
    return 'Product not found'
  }
  itemsStore.splice(index, 1)
  return 'Delete product successfully'
}