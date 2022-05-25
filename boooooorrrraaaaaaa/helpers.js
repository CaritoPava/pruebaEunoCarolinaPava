const addItem = (infoItem, itemsStore) => {
  itemsStore.push(infoItem)
  return 'Add product successfully'
}

const totalItems = (itemsStore) => {
  return itemsStore.length
}

const updateItem = (infoItem, itemsStore) => {
  const index = itemsStore.findIndex(item => item.code === infoItem.code)
  if (index === -1) {
    return 'Product not found'
  }
  itemsStore[index] = infoItem
  return 'Update product successfully'
}

const deleteItem = (idItem, itemsStore) => {
  const index = itemsStore.findIndex(item => item.code === idItem)
  if (index === -1) {
    return 'Product not found'
  }
  itemsStore.splice(index, 1)
  return 'Delete product successfully'
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

export default {
  addItem,
  totalItems,
  updateItem,
  deleteItem,
  listItems
}