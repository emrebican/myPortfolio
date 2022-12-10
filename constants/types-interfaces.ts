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
  url: string
  id: number
}

export type TForm = {
  name: string
  phone: string
  email: string
  comments: string
}

export interface IProduct {
  title: string
  overview: string
  demo: string
  code: string
  image: string
  made: string[]
  tech: string[]
}
