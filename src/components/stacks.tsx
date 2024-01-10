import { api } from '@/data/api'
import { Stack } from '@/data/types/stack'

async function getStacks(): Promise<Stack[]> {
  const response = await api('/stacks')

  const stacks = await response.json()

  return stacks
}

export default async function Stacks() {
  const stacks = await getStacks()

  return (
    <div className="mx-auto grid h-fit w-[100%] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      {stacks.map((item, index) => (
        <div
          key={index}
          className="flex h-full w-full flex-col rounded-3xl bg-loblolly-200/50 p-5 py-6"
        >
          <div className="w-fit">
            {/* <p className="tracking-none text-sm font-medium text-loblolly-500 md:text-lg lg:text-xl">
              ({String(Number(index + 1)).padStart(2, '0')})
            </p> */}

            <h2 className="mt-2 flex text-xl font-bold tracking-tight text-loblolly-700 md:text-3xl lg:text-5xl">
              {item.title}
            </h2>

            <div className="mt-4 flex flex-row flex-wrap gap-2 text-sm font-semibold text-loblolly-800 md:text-base lg:text-lg">
              {item.content.map((content, index) => (
                <>
                  <p className="rounded-full bg-white px-4 py-1" key={index}>
                    {content}
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
