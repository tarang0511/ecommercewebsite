import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([])
  const { addItem } = useShoppingCart()

  useEffect(() => {
    // In a real application, you would fetch the wishlist items from an API or local storage
    // For this example, we'll use some mock data
    const mockWishlistItems = [
      { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
      { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
    ]
    setWishlistItems(mockWishlistItems)
  }, [])

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your wishlist is empty</p>
          <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain" />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => addItem(item)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Heart className="w-6 h-6 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}