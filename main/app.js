function removeOrderItem(orderInfo, position) {
    if (Array.isArray(orderInfo.items) == false) {
        throw ("Items should be an array")
    }


    let propertiesExpected = "pricequantity"
    let actualProperties = ""
    orderInfo.items.forEach((item) => {
        actualProperties = ""
        for (property in item) {
            actualProperties += property
        }
        if (actualProperties !== propertiesExpected) {
            throw ("Malformed item")
        }
    })

    if (position < 0 || position > orderInfo.items.length - 1) {
        throw ("Invalid position")
    }

    orderInfo.items.splice(position, 1);

    orderInfo.total = 0
    orderInfo.items.forEach((item) => {
        orderInfo.total += (item.price * item.quantity)
    })

    return orderInfo
}



const app = {
    removeOrderItem
}


module.exports = app;