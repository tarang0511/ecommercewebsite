import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Wishlist from './components/Wishlist'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { Toaster } from 'react-hot-toast'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLogin = (email) => {
    setUser({ email })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <ShoppingCartProvider>
      <Router>
        <div className={`flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
          {user && <Header darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout} />}
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={user ? <Navigate to="/home" /> : <LandingPage onLogin={handleLogin} />} />
              <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
              <Route path="/products" element={user ? <ProductList /> : <Navigate to="/" />} />
              <Route path="/product/:id" element={user ? <ProductDetails /> : <Navigate to="/" />} />
              <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />
              <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="/" />} />
              <Route path="/wishlist" element={user ? <Wishlist /> : <Navigate to="/" />} />
            </Routes>
          </main>
          {user && <Footer />}
        </div>
        <Toaster position="bottom-right" />
      </Router>
    </ShoppingCartProvider>
  )
}