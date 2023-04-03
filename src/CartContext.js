import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    // const [totalOfAllProducts, setTotalOfAllProducts] = (0);
    const [productInCart, setProductInCart] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);
    const [cartNav, setCartNav] = useState(false);

    const totalOfAllProducts = items.reduce((acc, cur) => {
        return acc + cur.price;
    }, 0);
    // console.log(totalOfAllProducts);
    const addToCart = (quantity, price, image, title) => {
        setItems((prevState) => [
            ...prevState,
            { price, image, quantity, title },
        ]);
    };

    return (
        <CartContext.Provider
            value={{
                setItems,
                cartNav,
                setCartNav,
                items,
                totalOfAllProducts,
                addToCart,
                totalPrice,
                setTotalPrice,
                productInCart,
                setProductInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;
