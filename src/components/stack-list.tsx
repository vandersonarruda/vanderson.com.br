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
          className="bg-loblolly-200 flex h-full w-full flex-col rounded-3xl p-5 py-6"
        >
          <div className="w-fit">
            <p className="text-loblolly-500 tracking-none text-sm font-semibold lg:text-base">
              ({String(Number(index + 1)).padStart(2, '0')})
            </p>

            <h2 className="text-loblolly-950 mt-2 flex text-xl font-bold tracking-tight md:text-3xl lg:text-5xl">
              {item.title}
            </h2>

            <div className="text-md lg:text-bg text-loblolly-800 mt-5 text-base font-normal leading-normal md:text-xl md:leading-snug lg:leading-relaxed">
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

//   <div className="b mx-auto grid h-fit w-[100%] grid-cols-2 gap-1 rounded-3xl bg-white py-6 md:grid-cols-4 lg:grid-cols-4">
//   {stacks.map((item, index) => (
//     <div
//       key={index}
//       className="flex h-full w-full flex-col items-center p-5 [&:not(:first-child)]:border-l-[1px] [&:not(:first-child)]:border-zinc-900/20"
//     >
//       <div className="w-fit">
//         <p className="text-sm font-semibold tracking-tight text-zinc-800 lg:text-base">
//           ({String(Number(index + 1)).padStart(2, '0')})
//         </p>

//         <h2 className="flex text-xl font-semibold leading-tight tracking-tight md:text-xl md:leading-tight lg:text-3xl lg:leading-tight">
//           {item.title}
//         </h2>

//         <div className="text-md lg:text-bg mt-5 grid text-base font-normal leading-normal text-zinc-950 md:text-lg md:leading-snug lg:leading-relaxed">
//           {item.content.map((content, index) => (
//             <p key={index}>{content}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
