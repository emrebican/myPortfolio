export type TItem = {
  url: string
  title: string
  id: number
}

export type TSkill = {
  title: string
  image: string
  id: number
}

export type TProject = {
  name: string
  made: string
  image: string
  technologies?: string[]
  url: string
  id: number
}
