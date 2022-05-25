import { addItem, totalItems, updateItem, listItems, deleteItem } from './helpers'

const product = {
  code: 1,
  name: 'ps5',
  color: 'white',
  weight: 7
}

const product1 = {
  code: 2,
  name: 'qwe',
  color: 'white',
  weight: 7
}

const product2 = {
  code: 3,
  name: 'asd',
  color: 'white',
  weight: 7
}

const product3 = {
  code: 4,
  name: 'zxc',
  color: 'white',
  weight: 7
}

const productsStore = []

addItem(product, productsStore)
addItem(product1, productsStore)
addItem(product2, productsStore)
addItem(product3, productsStore)

updateItem(product, productsStore)

deleteItem(2, productsStore)

const listProducts = listItems(productsStore)
document.getElementById("products").innerHTML = listProducts
