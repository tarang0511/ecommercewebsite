import { createContext, useContext, useState } from 'react'

const ShoppingCartContext = createContext()

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function addItem(product) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === product.id) == null) {
        return [...currItems, { ...product, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeItem(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  function updateQuantity(id, quantity) {
    setCartItems(currItems => {
      if (quantity === 0) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value={{
      cartItems,
      cartQuantity,
      getItemQuantity,
      addItem,
      removeItem,
      updateQuantity
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}