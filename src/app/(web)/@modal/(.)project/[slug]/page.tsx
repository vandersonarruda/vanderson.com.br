import { Modal } from './modal'

export default function ProjectModal({
  params: { slug },
}: {
  params: { slug: string }
}) {
  return (
    <Modal>
      <div className="flex h-[400px] w-[900px] flex-col gap-8 bg-zinc-950 text-zinc-100">
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          doloribus sed vero ipsum consectetur ducimus inventore, corrupti
          ratione? Quam ducimus quos exercitationem sed dolor ipsum molestiae
          dignissimos quaerat porro tempore.
        </p>
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          doloribus sed vero ipsum consectetur ducimus inventore, corrupti
          ratione? Quam ducimus quos exercitationem sed dolor ipsum molestiae
          dignissimos quaerat porro tempore.
        </p>
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          doloribus sed vero ipsum consectetur ducimus inventore, corrupti
          ratione? Quam ducimus quos exercitationem sed dolor ipsum molestiae
          dignissimos quaerat porro tempore.
        </p>
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          doloribus sed vero ipsum consectetur ducimus inventore, corrupti
          ratione? Quam ducimus quos exercitationem sed dolor ipsum molestiae
          dignissimos quaerat porro tempore.
        </p>
        {slug}
      </div>
    </Modal>
  )
}
