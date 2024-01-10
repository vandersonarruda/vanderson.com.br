import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-12 overflow-hidden pt-6 md:gap-14 md:pt-12 lg:gap-24 lg:pt-16">
      <section className="flex flex-col items-center">
        <div className="flex w-5/6 flex-col gap-4 md:w-3/4 md:gap-8 lg:gap-12 xl:w-3/4">
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-14 w-[90%] md:h-24 lg:h-32" />
              <Skeleton className="h-14 w-[90%] md:h-24 lg:h-32" />
            </div>
          </div>

          <div>
            <Skeleton className="h-20 w-[90%] md:h-28 lg:h-40" />
          </div>
        </div>

        <div className="mx-auto mt-12 w-11/12 overflow-hidden rounded-2xl md:mt-16 md:rounded-medium lg:mt-20 lg:rounded-extra">
          <Skeleton className="aspect-video" />
        </div>
      </section>

      {/* About Me */}
      <section className="flex flex-col items-center">
        <div className="f flex w-5/6 flex-col gap-5 md:w-3/4">
          <Skeleton className="h-80 w-[90%] md:h-80 lg:h-96" />
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto mb-5 w-11/12 p-5">
        <div className="mb-8 whitespace-nowrap text-5xl font-bold tracking-tight md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl">
          <Skeleton className="h-20 w-[90%] md:h-28 lg:h-40" />
        </div>

        <Skeleton className="h-80 w-[90%] md:h-80 lg:h-[800px]" />
      </section>
    </div>
  )
}
