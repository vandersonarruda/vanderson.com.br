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
    <div className="">
      {stacks.map((item) => (
        <div
          key={item.title}
          className="mb-6 h-fit rounded-2xl bg-blue-500 p-6"
        >
          <h2 className="mb-4 flex flex-col items-center text-xl font-bold leading-normal md:text-2xl md:leading-normal lg:text-2xl lg:leading-normal">
            {item.title}
          </h2>

          <div className="text-md flex flex-col items-center font-medium leading-normal text-zinc-50 md:text-xl md:leading-normal lg:text-lg lg:leading-normal">
            {item.content.map((content) => (
              <p key={content}>{content}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
