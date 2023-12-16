export default increaseCart = ({ id, quantity, product: { stock_count } }, cartListCopy, setCartListCopy ) => {

    if (quantity < stock_count) {

        let filteredCart = cartListCopy.filter(quantity => {

            if (quantity.id === id) {
                quantity.quantity = quantity.quantity + 1
                quantity.total_amount = parseInt(quantity.product.price_per_pack) * parseInt(quantity.quantity)
                return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id }

            }
        })


        var res = cartListCopy.map(obj => filteredCart.find(quantity => quantity.cart_id === obj.id) || obj);
        setCartListCopy(res)
        return res

    }
};

export const textInputCart = ({ id, quantity, product: { stock_count } }, cartListCopy, setCartListCopy, value ) => {
    const val = parseInt(value)

    if (quantity < stock_count && val > 0 && val <= stock_count && value.length ) {

        let filteredCart = cartListCopy.filter(quantity => {

            if (quantity.id === id) {
                quantity.quantity = val
                quantity.total_amount = parseInt(quantity.product.price_per_pack) * parseInt(quantity.quantity)
                return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id }

            }
        })


        var res = cartListCopy.map(obj => filteredCart.find(quantity => quantity.cart_id === obj.id) || obj);
        setCartListCopy(res)
        return res

    }
};


