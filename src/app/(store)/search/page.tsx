import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'

interface SearchProps {
  q: string
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()
  return products
}

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<SearchProps>
}) {
  const { q: query } = await searchParams
  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                className="transition-transform duration-500 group-hover:scale-105"
                src={product.image}
                width={480}
                height={480}
                alt=""
                quality={100}
              />

              <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-zinc-900 p-1 pl-4">
                <span className="truncate text-sm">{product.title}</span>
                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
