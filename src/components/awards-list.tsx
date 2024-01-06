import { api } from '@/data/api'
import { Stack } from '@/data/types/stack'

async function getStacks(): Promise<Stack[]> {
  const response = await api('/stacks')

  const stacks = await response.json()

  return stacks
}

export default async function AwardsList() {
  const stacks = await getStacks()

  const length = stacks.length

  return (
    // <div className="mx-auto grid w-[100%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-7">
    <div className="mx-auto flex h-full w-[100%] flex-nowrap">
      {stacks.map((item, index) => (
        <>
          {/* <div key={item.title} className="mb-10 h-fit w-[94%] bg-red-500"> */}
          <div key={item.title} className="mb-10 h-full w-full px-5">
            <p className="text-sm font-semibold tracking-tight lg:text-base">
              ({String(Number(index + 1)).padStart(2, '0')})
            </p>

            <h2 className="flex text-xl font-semibold leading-tight tracking-tight md:text-xl md:leading-tight lg:text-4xl lg:leading-tight">
              {item.title}
            </h2>

            <div className="text-md mt-4 grid text-base font-normal leading-normal text-neutral-500 md:text-lg md:leading-normal lg:text-xl lg:leading-relaxed">
              {item.content.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </div>
          </div>
          {index < length - 1 && <div className="h-full w-2 bg-zinc-600" />}
        </>
      ))}
    </div>
  )
}
