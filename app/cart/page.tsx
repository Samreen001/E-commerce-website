'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types'
import CartItem from '../components/CartItem'

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const updateCart = (updatedCart: Product[]) => {
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    updateCart(updatedCart)
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    )
    updateCart(updatedCart)
  }

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

  const handleCheckout = () => {
    alert('Thank you for your purchase! Your order has been confirmed.')
    updateCart([])
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-green-700">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

