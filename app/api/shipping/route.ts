import { NextResponse } from 'next/server'
import EasyPost from '@easypost/api'

const client = new EasyPost(process.env.EASYPOST_API_KEY)

export async function POST(request: Request) {
  const { toAddress, fromAddress, parcel } = await request.json()

  try {
    const shipment = await client.Shipment.create({
      to_address: toAddress,
      from_address: fromAddress,
      parcel: parcel,
    })

    return NextResponse.json(shipment)
  } catch (error) {
    console.error('Error creating shipment:', error)
    return NextResponse.json({ error: 'Failed to create shipment' }, { status: 500 })
  }
}

