import { NextResponse } from 'next/server'
import { Product } from '@/types'

const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic T-Shirt",
    price: 19.99,
    description: "A comfortable and versatile t-shirt for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "men"
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 49.99,
    description: "A light and breezy dress perfect for summer days.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "women"
  },
  {
    id: 3,
    name: "Kids' Colorful Sneakers",
    price: 34.99,
    description: "Comfortable and fun sneakers for active kids.",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "kids"
  },
  {
    id: 4,
    name: "Men's Slim Fit Jeans",
    price: 59.99,
    description: "Stylish slim fit jeans that look great with any outfit.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "men"
  },
  {
    id: 5,
    name: "Women's Leather Jacket",
    price: 129.99,
    description: "A timeless leather jacket to add edge to your style.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "women"
  },
  {
    id: 6,
    name: "Kids' Pajama Set",
    price: 24.99,
    description: "Soft and cozy pajama set for a good night's sleep.",
    image: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "kids"
  }
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}

