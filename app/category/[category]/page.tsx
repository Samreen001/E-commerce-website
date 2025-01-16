import ProductList from '@/app/components/ProductList'

export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-secondary-900 mb-8 capitalize">{params.category}'s Products</h1>
      <ProductList category={params.category} />
    </div>
  )
}

