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
    <div className="mx-auto flex h-full w-full flex-col border-b-[1px] border-zinc-900/70">
      {awards.map((item) => {
        const conquerQuantity = item.conquers.reduce((acc, conquer) => {
          return acc + conquer.quantity
        }, 0)

        return (
          <>
            <div className="group flex h-28 flex-col justify-center border-t-[1px] border-zinc-900/70 transition-all duration-200 md:h-20 md:flex-row md:justify-between lg:h-24 lg:hover:h-32">
              <div className="flex flex-row items-center gap-3 md:h-full">
                <p className="text-lg font-semibold lg:text-xl">
                  {String(conquerQuantity).padStart(2, '0')}x
                </p>
                <p className="text-3xl font-bold lg:text-4xl">{item.title}</p>
              </div>
              <div className="ml-7 flex flex-row items-center md:h-full">
                {item.conquers.map((conquer, index) => (
                  <div key={index} className="flex flex-row">
                    <span className="px-1 md:px-2">{index !== 0 && '/'}</span>
                    <span className="text-sm font-medium opacity-80 lg:text-xl">
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
