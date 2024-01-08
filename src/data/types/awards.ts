interface Conquer {
  position: string
  quantity: number
}

export interface Awards {
  title: string
  conquers: Conquer[]
}
