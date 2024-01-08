import { api } from '@/data/api'
import { Awards } from '@/data/types/awards'

async function getAwards(): Promise<Awards[]> {
  const response = await api('/awards')

  const awards = await response.json()

  return awards
}

export default async function AwardsList() {
  const awards = await getAwards()

  return (
    <div className="mx-auto flex h-full w-full flex-col rounded-3xl border-b-[1px] bg-white/80 px-5">
      {awards.map((item) => {
        const conquerQuantity = item.conquers.reduce((acc, conquer) => {
          return acc + conquer.quantity
        }, 0)

        return (
          <>
            <div
              key={item.title}
              className="group flex h-28 flex-col justify-center transition-all duration-200 md:h-20 md:flex-row md:justify-between lg:h-24 lg:hover:h-36 [&:not(:first-child)]:border-t-[1px] [&:not(:first-child)]:border-zinc-900/50"
            >
              <div className="flex w-full flex-row items-center md:h-full md:w-full">
                <div className="w-10 md:w-12">
                  <p className="text-lg font-semibold text-zinc-800 lg:text-xl">
                    {String(conquerQuantity).padStart(2, '0')}x
                  </p>
                </div>
                {/* <p className="w-full bg-gradient-to-r from-[#5f72bd] to-[#9b23ea] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl"> */}
                <p className="w-full text-3xl font-bold lg:text-4xl">
                  {item.title}
                </p>
              </div>

              <div className="flex w-full flex-row items-center pl-11 md:h-full md:justify-end md:pl-0">
                {item.conquers.map((conquer, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center text-zinc-800"
                  >
                    {index !== 0 && <span className="px-1">/</span>}
                    <span className="text-sm font-medium leading-none md:text-base lg:text-lg">
                      {conquer.quantity}x {conquer.position}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}
