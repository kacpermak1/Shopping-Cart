export const addToCart = (id) => {
    return {
        type: "ADD_TO_CART",
        id
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: "ADD_QUANTITY",
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: "SUBTRACT_QUANTITY",
        id
    }
}

export const addShipping = () => {
    return {
        type: "ADD_SHIPPING",
    }
}

export const subtractShipping = () => {
    return {
        type: "SUBTRACT_SHIPPING",
    }
}