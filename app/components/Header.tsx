'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Search, Menu, X, UserCircle } from 'lucide-react'

const categories = [
  { name: 'Men', href: '/category/men' },
  { name: 'Women', href: '/category/women' },
  { name: 'Kids', href: '/category/kids' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(cart.length)
    }

    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    return () => window.removeEventListener('storage', updateCartCount)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-secondary-900 text-primary-400 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors">
            FashionHub
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`text-lg font-medium hover:text-primary-300 transition-colors ${
                  pathname === category.href ? 'text-primary-300' : ''
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-4 bg-secondary-800 text-white placeholder-secondary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-2 top-2 text-secondary-400 hover:text-primary-400">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
            <Link href="/cart" className="flex items-center text-primary-400 hover:text-primary-300 transition-colors">
              <ShoppingBag className="h-6 w-6 mr-1" />
              <span className="font-semibold">{cartCount}</span>
            </Link>
            <Link href="/login" className="flex items-center text-primary-400 hover:text-primary-300 transition-colors">
              <UserCircle className="h-6 w-6 mr-1" />
              <span className="font-semibold">Login</span>
            </Link>
            <button
              className="md:hidden text-primary-400 hover:text-primary-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-4 bg-secondary-800 text-white placeholder-secondary-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-2 top-2 text-secondary-400 hover:text-primary-400">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`block py-2 text-lg font-medium hover:text-primary-300 transition-colors ${
                  pathname === category.href ? 'text-primary-300' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-lg font-medium hover:text-primary-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

