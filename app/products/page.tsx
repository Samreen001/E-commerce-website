import ProductList from '../components/ProductList'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Our Products</h1>
      <ProductList />
    </div>
  )
}

