import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'

export default function ProductDetails({ addToCart, addToWishlist }) {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  if (!product) {
    return <div className="text-center text-gray-600 dark:text-gray-300">Loading...</div>
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-primary dark:text-primary-foreground">{product.title}</h1>
        <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
        <p className="text-2xl font-bold text-primary dark:text-primary-foreground">${product.price.toFixed(2)}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-primary/90 transition-colors flex items-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist(product)}
            className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            <Heart className="w-5 h-5 mr-2" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}