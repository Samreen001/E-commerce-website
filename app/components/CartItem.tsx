import Image from 'next/image'
import { Product } from '@/types'

interface CartItemProps {
  item: Product
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
}

export default function CartItem({ item, removeFromCart, updateQuantity }: CartItemProps) {
  return (
    <div className="flex items-center border-b py-4">
      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
          className="bg-gray-200 px-2 py-1 rounded-l"
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span className="bg-gray-100 px-4 py-1">{item.quantity || 1}</span>
        <button
          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
          className="bg-gray-200 px-2 py-1 rounded-r"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  )
}

