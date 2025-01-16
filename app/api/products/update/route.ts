import { NextResponse } from 'next/server'
import { fetchFromStrapi } from '@/lib/strapi'

export async function POST(request: Request) {
  const { id, price, inventory } = await request.json()

  try {
    const response = await fetch(`${process.env.STRAPI_URL}/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({ data: { price, inventory } }),
    })

    if (!response.ok) {
      throw new Error('Failed to update product')
    }

    const updatedProduct = await response.json()
    return NextResponse.json(updatedProduct.data)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

