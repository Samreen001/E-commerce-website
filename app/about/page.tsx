import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-secondary-900 mb-8 text-center">About FashionHub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-secondary-600 mb-6">
            FashionHub is your premier destination for fashion-forward individuals who appreciate quality, style, and sustainability. 
            Founded in 2023, we've quickly become a go-to platform for those seeking to express their unique personality through clothing.
          </p>
          <p className="text-lg text-secondary-600 mb-6">
            Our mission is to provide a curated selection of trendy, high-quality apparel for men, women, and kids, 
            while maintaining a commitment to ethical production and environmental responsibility.
          </p>
          <p className="text-lg text-secondary-600">
            At FashionHub, we believe that fashion is more than just clothing – it's a form of self-expression. 
            That's why we work tirelessly to bring you the latest trends and timeless classics, 
            ensuring that every piece in our collection helps you tell your unique story.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5d126b5998906400018777ba/e4b2d2c2-29f3-479e-81ed-a0a223e9ca9a/jam2.jpg"
            alt="FashionHub Team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

