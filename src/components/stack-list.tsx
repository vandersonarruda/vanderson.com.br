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
    <>
      {stacks.map((item, index) => (
        <div
          key={item.title}
          className="mb-10 h-fit w-[94%] rounded-2xl border-[1px] border-stone-100 bg-white p-4"
        >
          <p className="text-sm font-semibold tracking-tight lg:text-base">
            ({String(Number(index + 1)).padStart(2, '0')})
          </p>

          <h2 className="flex text-xl font-semibold leading-tight tracking-tight md:text-xl md:leading-tight lg:text-3xl lg:leading-tight">
            {item.title}
          </h2>

          <div className="text-md mt-4 grid text-base font-normal leading-normal text-neutral-500 md:text-base md:leading-normal lg:text-lg lg:leading-relaxed">
            {item.content.map((content) => (
              <p key={content}>{content}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
