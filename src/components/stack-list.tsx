import { api } from '@/data/api'
import { Stack } from '@/data/types/stack'

async function getStacks(): Promise<Stack[]> {
  const response = await api('/stacks')

  const stacks = await response.json()

  return stacks
}

export default async function StackList() {
  const stacks = await getStacks()

  // const length = stacks.length

  return (
    <div className="mx-auto grid h-fit w-[100%] grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4">
      {stacks.map((item, index) => (
        <>
          <div key={item.title} className="h-fit w-full">
            <p className="text-sm font-semibold tracking-tight lg:text-base">
              ({String(Number(index + 1)).padStart(2, '0')})
            </p>

            <h2 className="flex text-xl font-semibold leading-tight tracking-tight md:text-xl md:leading-tight lg:text-3xl lg:leading-tight">
              {item.title}
            </h2>

            <div className="text-md lg:text-bg mt-4 grid text-base font-normal leading-normal text-zinc-950/80 md:text-base md:leading-snug lg:leading-snug">
              {item.content.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
