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
    <div className="mx-auto grid h-fit w-[100%] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {stacks.map((item, index) => (
        <div
          key={index}
          // className="flex h-full w-full flex-col rounded-3xl bg-loblolly-200/50 p-5"
          className="flex h-full w-full flex-col"
        >
          <div className="w-fit">
            <h2 className="flex text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {item.title}
            </h2>

            <div className="mt-5 flex flex-row flex-wrap gap-2 text-sm font-semibold md:mb-8 md:text-base lg:text-base">
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
