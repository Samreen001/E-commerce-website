export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: 'men' | 'women' | 'kids'
  inventory: number
  quantity?: number
}

