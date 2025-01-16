import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import AddToCartButton from './AddToCartButton'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 sm:h-64">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-opacity hover:opacity-75 duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg font-semibold mb-2 text-secondary-900 hover:text-primary-500 transition-colors line-clamp-2">
            {product.name}
          </h2>
        </Link>
        <p className="text-primary-600 font-bold mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-secondary-600 mb-2 line-clamp-2">{product.description}</p>
        <p className="text-sm text-secondary-500 mb-2">Category: {product.category}</p>
        <p className="text-sm text-secondary-500 mb-2">In stock: {product.inventory}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}

