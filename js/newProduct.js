const productsStore = []

function newProduct() {
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
  const response = addItem(product, productsStore)
  const responseMessage = document.getElementById('response')
  responseMessage.innerHTML = response
}

const addItem = (infoItem, itemsStore) => {
  itemsStore.push(infoItem)
  return 'Add product successfully'
}

export default productsStore