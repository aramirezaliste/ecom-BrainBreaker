import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = cart.filter((e) => e.id != product.id)
        setCart([...newCart, product])
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((e) => e.id != id)
        setCart(newCart)
    }

    const cartCount = () => {
        return cart.reduce((acc, cur) => acc + cur.count, 0)
    }
    const count = cartCount()

    return (
        <CartContext.Provider value={{ cart, addToCart, count, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}