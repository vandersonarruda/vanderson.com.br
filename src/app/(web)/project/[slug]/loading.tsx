import { Skeleton } from '@/components/skeleton'

export default function ProjectLoading() {
  return (
    <div className="max-w-limit mx-auto px-4 md:px-16 lg:px-16">
      <div className="mx-8 md:mx-20 lg:mx-36">
        <h2 className="text-xl font-normal leading-normal md:text-2xl md:leading-normal lg:text-3xl lg:leading-tight">
          <Skeleton className="h-10 w-52" />
        </h2>

        <h1 className="text-2xl font-extrabold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          <Skeleton className="mt-4 h-12 w-80" />
        </h1>
      </div>
      <div className="mt-8 md:mt-8 lg:mx-20 lg:mt-8">
        <Skeleton className="aspect-video" />
      </div>
      <div className="mx-8 md:mx-20 lg:mx-36">
        <div className="mt-8 flex flex-col gap-8 text-base font-normal leading-relaxed md:mt-12 md:text-xl md:leading-relaxed lg:mt-14 lg:text-2xl lg:leading-relaxed">
          <Skeleton className="h-60 w-full" />
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-12 lg:mt-14">
          <Skeleton className="aspect-video" />
          <Skeleton className="aspect-video" />
          <Skeleton className="aspect-video" />
        </div>
      </div>
    </div>
  )
}
