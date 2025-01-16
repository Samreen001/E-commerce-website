'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Product } from '@/types'
import AddToCartButton from '@/app/components/AddToCartButton'
import ShippingCalculator from '@/app/components/ShippingCalculator'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching product:', error)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <div className="text-center py-8">Loading product details...</div>
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-64 md:h-96">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-secondary-600 mb-6">{product.description}</p>
          <p className="text-secondary-500 mb-4">In stock: {product.inventory}</p>
          <AddToCartButton product={product} />
          <ShippingCalculator weight={product.weight || 1} />
        </div>
      </div>
    </div>
  )
}

