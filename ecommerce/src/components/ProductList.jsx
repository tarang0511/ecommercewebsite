import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const location = useLocation()
  const category = new URLSearchParams(location.search).get('category')

  useEffect(() => {
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products'
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [category])

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-teal-800 dark:text-teal-200">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : 'All Products'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-64 p-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">{product.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-teal-600 dark:text-teal-400">${product.price.toFixed(2)}</span>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}