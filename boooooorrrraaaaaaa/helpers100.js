const itemsStore = []

const addItem = (infoItem) => {
  itemsStore.push(infoItem)
  return 'Add product successfully'
}

const totalItems = () => {
  return itemsStore.length
}

const updateItem = (infoItem) => {
  const index = itemsStore.findIndex(item => item.code === infoItem.code)
  if (index === -1) {
    return 'Product not found'
  }
  itemsStore[index] = infoItem
  return 'Update product successfully'
}

const deleteItem = (idItem) => {
  const index = itemsStore.findIndex(item => item.code === idItem)
  if (index === -1) {
    return 'Product not found'
  }
  itemsStore.splice(index, 1)
  return 'Delete product successfully'
}

const listItems = () => {
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
