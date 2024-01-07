import { api } from '@/data/api'
import { Awards } from '@/data/types/awards'

async function getAwards(): Promise<Awards[]> {
  const response = await api('/awards')

  const awards = await response.json()

  return awards
}

export default async function AwardsList() {
  const awards = await getAwards()

  const length = awards.length

  return (
    // <div className="mx-auto grid w-[100%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-7">
    <div className="mx-auto flex h-full w-[100%] flex-col flex-nowrap gap-5">
      {awards.map((item, index) => (
        <>
          <div className="flex flex-row gap-2">
            <p className="font-semibold">{item.title}</p>
            {item.conquers.map((conquer, index) => (
              <>
                <span className="px-1">{conquer.position}</span>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  )
}
