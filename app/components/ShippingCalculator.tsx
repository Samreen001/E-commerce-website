'use client'

import { useState } from 'react'
import { Loader } from 'lucide-react'

interface ShippingCalculatorProps {
  weight: number
}

export default function ShippingCalculator({ weight }: ShippingCalculatorProps) {
  const [zipCode, setZipCode] = useState('')
  const [shippingCost, setShippingCost] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const calculateShipping = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/shipping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toAddress: { zip: zipCode },
          fromAddress: { zip: '90210' }, // Example origin zip code
          parcel: { weight },
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to calculate shipping')
      }

      const data = await response.json()
      setShippingCost(data.rates[0].rate) // Assuming we're using the cheapest rate
    } catch (error) {
      console.error('Error calculating shipping:', error)
      setError('Failed to calculate shipping. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Calculate Shipping</h3>
      <div className="flex items-center">
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter zip code"
          className="border rounded-l px-2 py-1 w-32"
        />
        <button
          onClick={calculateShipping}
          disabled={isLoading || !zipCode}
          className="bg-primary-500 text-white px-4 py-1 rounded-r hover:bg-primary-600 transition-colors"
        >
          {isLoading ? <Loader className="animate-spin h-5 w-5" /> : 'Calculate'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {shippingCost !== null && (
        <p className="mt-2">Estimated shipping cost: ${shippingCost.toFixed(2)}</p>
      )}
    </div>
  )
}

