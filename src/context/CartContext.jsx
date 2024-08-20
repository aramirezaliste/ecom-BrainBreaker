import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([])

    const addToCart = ( product ) => {
        const newCart = cart.filter((e) => e.id != product.id)
        setCart([...newCart, product])
    }

    const cartCount = () => {
        return cart.reduce((acc, cur) =>  acc + cur.count, 0)
    }
    const count = cartCount()

    return (
        <CartContext.Provider value={{cart, addToCart, count}}>
            {children}
        </CartContext.Provider>
    )
}