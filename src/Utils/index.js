/**
 * This función calculates the total price of the products in the cart
 * @param {Array} products cartProduct: Array of obkets
 * @returns {Number} Total price of products
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => 
        sum += product.price
    )

    return sum
}