interface ICategory {
  id: string
  title: string
  icon?: string
  parentCategory?: ICategory
}

export {
  ICategory
}