const productsStore = []

function deleteProduct() {
  const code = document.getElementById('code').value
  const response = deleteItem(code)
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