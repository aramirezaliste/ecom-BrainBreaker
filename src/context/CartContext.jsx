import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([])
    const [ itemCount, setItemCount ] = useState(null)

    const addToCart = ( product ) => {
        const newCart = cart.filter((e) => e.id != product.id)
        setCart([...newCart, product])
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}