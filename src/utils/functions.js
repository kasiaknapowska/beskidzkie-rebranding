export const selectProduct = (products, id) => products.filter(product => product.id === id)

export const filterByType = (products, type) => products.filter(product => product.type.includes(type))

export const getObjectValueByKey = (myObject, myKey) => Object.values(Object.fromEntries(Object.entries(myObject).filter(([key, value]) => key === myKey)))
// const selectType = (product, defaultType) => product[0]?.type || defaultType

export const getWolumenWeight = (productWeight, quantity, packQuantity = 1) => productWeight * quantity * packQuantity;