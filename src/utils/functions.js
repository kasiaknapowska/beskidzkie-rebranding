export const selectProduct = (products, id) => products.filter(product => product.id === id)

export const filterByType = (products, type) => products.filter(product => product.type.includes(type))


// const selectType = (product, defaultType) => product[0]?.type || defaultType