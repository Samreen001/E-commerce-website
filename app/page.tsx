import Link from 'next/link'
import Image from 'next/image'
import ProductList from './components/ProductList'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Men', image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeknu7Ke_myH859eThBHTvTWHPwu6YAGJNw&s', href: '/category/men' },
  { name: 'Women', image: 'https://previews.123rf.com/images/puhhha/puhhha1805/puhhha180500601/101018604-girls-shopping-beautiful-happy-female-friends-with-colorful-bags-walking-in-mall-high-resolution.jpg', href: '/category/women' },
  { name: 'Kids', image: 'https://c8.alamy.com/comp/M0H374/cute-fashionable-children-with-paper-bags-and-credit-card-smiling-M0H374.jpg', href: '/category/kids' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">Welcome to FashionHub</h1>
        <p className="text-xl text-secondary-600 mb-8">Discover trendy products for everyone in your family</p>
        <div className="space-x-4">
          <Link 
            href="/products" 
            className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-secondary-900 mb-6">Featured Products</h2>
        <ProductList limit={8} />
        <div className="text-center mt-8">
          <Link 
            href="/products" 
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center justify-center"
          >
            View All Products
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-secondary-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className="relative overflow-hidden rounded-lg group"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

