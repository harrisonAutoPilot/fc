
export default decreaseCart = ({ id }, cartListCopy, setCartListCopy) => {


    let filteredCart = cartListCopy.filter(quantity => {
        if (quantity.id === id && quantity.quantity > 1) {
            quantity.quantity = quantity.quantity - 1
            quantity.total_amount = parseInt(quantity.product.price_per_pack * quantity.quantity)
            return { quantity: quantity.quantity, total_amount: quantity.total_amount, price_per_pack: quantity.product.price_per_pack, cart_id: quantity.id, }

        }
    })


    var res = cartListCopy.map(obj => filteredCart.find(quantity => quantity.cart_id === obj.id) || obj);
    setCartListCopy(res);

    return res
};