import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import toast from 'react-hot-toast'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const { addItem } = useShoppingCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data))
  }, [])

  const handleAddToCart = (product) => {
    addItem(product)
    toast.success(`${product.title} added to cart!`)
  }

  return (
    <div>
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FakeStore</h1>
          <p className="text-xl md:text-2xl mb-8">Discover amazing products at unbeatable prices!</p>
          <Link
            to="/products"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <Link to={`/product/${product.id}`}>
                  <div className="h-64 p-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-1">{product.title}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600 dark:text-gray-400">{product.rating.rate.toFixed(1)}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">${product.price.toFixed(2)}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                      <button className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}