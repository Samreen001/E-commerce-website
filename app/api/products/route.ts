import { NextResponse } from 'next/server'
import { Product } from '@/types'

const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic T-Shirt",
    price: 19.99,
    description: "A comfortable and versatile t-shirt for everyday wear.",
    image: "https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt.jpg",
    category: "men",
    inventory: 100
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 49.99,
    description: "A light and breezy dress perfect for summer days.",
    image: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/96/3166521/5.jpg?9774",
    category: "women",
    inventory: 50
  },
  {
    id: 3,
    name: "Kids' Colorful Sneakers",
    price: 34.99,
    description: "Comfortable and fun sneakers for active kids.",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "kids",
    inventory: 75
  },
  {
    id: 4,
    name: "Men's Slim Fit Jeans",
    price: 59.99,
    description: "Stylish slim fit jeans that look great with any outfit.",
    image: " https://img.drz.lazcdn.com/static/pk/p/22eb87b67bde0cf75411b2d3c6e3e307.jpg_720x720q80.jpg",
    category: "men",
    inventory: 80
  },
  {
    id: 5,
    name: "Women's Leather Jacket",
    price: 129.99,
    description: "A timeless leather jacket to add edge to your style.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOiFsrsxqev9hN9noI3C_2m62v6Wuv_HfzD9MFREGxa6L-XWkHqn1saenbcJo3DPl7Z8&usqp=CAU",
    category: "women",
    inventory: 30
  },
  {
    id: 6,
    name: "Kids' Pajama Set",
    price: 24.99,
    description: "Soft and cozy pajama set for a good night's sleep.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-BC4bCnoJMTUIQQo8byQcvhqSKsDcPUkDw&s",
    category: "kids",
    inventory: 60
  },
  {
    id: 7,
    name: "Men's Formal Shirt",
    price: 45.99,
    description: "A crisp, white formal shirt for professional settings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmEvOzelE8P04sEsRK2Ebkb8OtcPQLNiMdw&s",
    category: "men",
    inventory: 70
  },
  {
    id: 8,
    name: "Women's Yoga Pants",
    price: 39.99,
    description: "Comfortable and flexible yoga pants for your workout.",
    image: "https://www.noelasmaruniforms.com/cdn/shop/products/FC064-womens-yoga-pant-noel-asmar-uniform-fitness-bottoms-chocolate-side.jpg?v=1688060390",
    category: "women",
    inventory: 90
  },
  {
    id: 9,
    name: "Kids' Backpack",
    price: 29.99,
    description: "A colorful and spacious backpack for school or travel.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aZl77XRQcDlDC-sYwI0mCunwsDX8cbLtLw&s",
    category: "kids",
    inventory: 55
  },
  {
    id: 10,
    name: "Men's Running Shoes",
    price: 79.99,
    description: "Lightweight and comfortable running shoes for your daily jog.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRxKw-U8sJaEfPD9sNBWkC8d14qmgkAfDjQ&s",
    category: "men",
    inventory: 65
  },
  {
    id: 11,
    name: "Women's Sunglasses",
    price: 89.99,
    description: "Stylish sunglasses to protect your eyes and complete your look.",
    image: "https://negativeapparel.com/cdn/shop/products/3pairs-women-cat-eye-frame-sunglasses-negative-apparel-664103.jpg?v=1709149023",
    category: "women",
    inventory: 40
  },
  {
    id: 12,
    name: "Kids' Winter Jacket",
    price: 69.99,
    description: "A warm and cozy winter jacket to keep your child comfortable in cold weather.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlnCmTWDra1Z3wwqTDmD7U5DpbLs063kJhQ&s",
    category: "kids",
    inventory: 35
  },
  {
    id: 13,
    name: "Men's Swim Shorts",
    price: 29.99,
    description: "Comfortable and quick-drying swim shorts for the beach or pool.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42jVe2BF5RVdmXiO36-IO-ao9IfDZHHo65g&s",
    category: "men",
    inventory: 85
  },
  {
    id: 14,
    name: "Women's Blouse",
    price: 39.99,
    description: "An elegant blouse suitable for both casual and formal occasions.",
    image: "https://ae01.alicdn.com/kf/H5efce501e262472291d4099e9d412cbca.jpg_640x640q90.jpg",
    category: "women",
    inventory: 60
  },
  {
    id: 15,
    name: "Kids' Rain Boots",
    price: 34.99,
    description: "Colorful and waterproof boots to keep little feet dry on rainy days.",
    image: "https://i5.walmartimages.com/asr/72671178-568b-4eb7-921f-ea6c7bc797d4.281e4b55c43778f2744d867b410060a9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    category: "kids",
    inventory: 45
  },
  {
    id: 16,
    name: "Men's Leather Wallet",
    price: 49.99,
    description: "A sleek and durable leather wallet with multiple card slots.",
    image: "https://vonbaer.com/cdn/shop/files/von-baer-washington-premium-mens-leather-trifold-wallet-solid-brown-in-the-car-opened.jpg?v=1712302749&width=500",
    category: "men",
    inventory: 100
  },
  {
    id: 17,
    name: "Women's Scarf",
    price: 24.99,
    description: "A soft and stylish scarf to keep you warm and fashionable.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMFn-5HU5ux3akdehvBnz--4iKPw0hPdb6lm1ApWZiT1UDJAUtPafayIjnB0TPEuPZw0&usqp=CAU",
    category: "women",
    inventory: 75
  },
  {
    id: 18,
    name: "Kids' Baseball Cap",
    price: 19.99,
    description: "A comfortable and adjustable cap to shield your child from the sun.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8_YPvPEJNM1Zr8ZqRmT7U1gTRtgMmoXq7g&s",
    category: "kids",
    inventory: 120
  },
  {
    id: 19,
    name: "Men's Dress Shoes",
    price: 89.99,
    description: "Classic leather dress shoes for formal occasions.",
    image: "https://cdn.shopify.com/s/files/1/1071/7028/files/American-flag-dress-socks-with-light-brown-tassel-loafers_480x480.jpg?v=1653078283",
    category: "men",
    inventory: 50
  },
  {
    id: 20,
    name: "Women's Handbag",
    price: 79.99,
    description: "A stylish and spacious handbag for everyday use.",
    image: "https://cdn.prod.website-files.com/66902b0c958b1f38e1fdbb1c/6723cf494bf3bffe6e2d40a0_20211019_thredUP_ABatz27288.jpg",
    category: "women",
    inventory: 65
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')

  try {
    let filteredProducts = products
    if (category) {
      filteredProducts = products.filter(product => product.category === category)
    }

    return NextResponse.json(filteredProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

