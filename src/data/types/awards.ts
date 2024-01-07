interface Conquer {
  year: string
  position: string
  category: string
  client: string
  project: string
}

export interface Awards {
  title: string
  conquers: Conquer[]
}
