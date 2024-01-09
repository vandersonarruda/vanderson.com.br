import { api } from '@/data/api'
import { Stack } from '@/data/types/stack'

async function getStacks(): Promise<Stack[]> {
  const response = await api('/stacks')

  const stacks = await response.json()

  return stacks
}

export default async function StackList() {
  const stacks = await getStacks()

  return (
    <div className="mx-auto grid h-fit w-[100%] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      {stacks.map((item, index) => (
        <div
          key={index}
          className="flex h-full w-full flex-col rounded-3xl bg-loblolly-200 p-5 py-6"
        >
          <div className="w-fit">
            <p className="tracking-none text-sm font-semibold text-loblolly-500 lg:text-base">
              ({String(Number(index + 1)).padStart(2, '0')})
            </p>

            <h2 className="mt-2 flex text-xl font-bold tracking-tight text-loblolly-950 md:text-3xl lg:text-5xl">
              {item.title}
            </h2>

            <div className="text-md lg:text-bg mt-5 text-base font-normal leading-normal text-loblolly-800 md:text-xl md:leading-snug lg:leading-relaxed">
              {item.content.map((content, index) => (
                <>
                  <span key={index}>
                    {index !== 0 && <span>, </span>} {content}
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
