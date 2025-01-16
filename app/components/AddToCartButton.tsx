'use client'

import { useState } from 'react'
import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react'

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false)

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingProduct = cart.find((item: Product) => item.id === product.id)

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 2000)

    window.dispatchEvent(new Event('storage'))
  }

  return (
    <button
      onClick={addToCart}
      className={`w-full py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center ${
        isAdded
          ? 'bg-primary-600 text-secondary-900'
          : 'bg-primary-500 text-secondary-900 hover:bg-primary-400'
      }`}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  )
}

