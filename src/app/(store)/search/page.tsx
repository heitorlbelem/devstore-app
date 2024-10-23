import Link from 'next/link'
import Image from 'next/image'

export default async function Search() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        resultados para: <span className="font-semibold">moletom</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Link
          href="/product/moletom-never-stop-learning"
          className="group relative overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            className="transition-transform duration-500 group-hover:scale-105"
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            alt=""
            quality={100}
          />

          <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-zinc-900 p-1 pl-4">
            <span className="truncate text-sm">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          href="/product/moletom-never-stop-learning"
          className="group relative overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            className="transition-transform duration-500 group-hover:scale-105"
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            alt=""
            quality={100}
          />

          <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-zinc-900 p-1 pl-4">
            <span className="truncate text-sm">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>

        <Link
          href="/product/moletom-never-stop-learning"
          className="group relative overflow-hidden rounded-lg bg-zinc-900"
        >
          <Image
            className="transition-transform duration-500 group-hover:scale-105"
            src="/moletom-never-stop-learning.png"
            width={480}
            height={480}
            alt=""
            quality={100}
          />

          <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-zinc-900 p-1 pl-4">
            <span className="truncate text-sm">
              Moletom Never Stop Learning
            </span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
