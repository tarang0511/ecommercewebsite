import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-foreground">FakeStore</h3>
            <p>Your one-stop shop for all things fake and fabulous!</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">
                  Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-foreground">Contact Us</h3>
            <p>Email: info@fakestore.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-foreground">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-foreground">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-foreground">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 FakeStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}