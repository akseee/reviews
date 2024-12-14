export type initialStateForm = {
  platform: string
  ratingFrom: number
  ratingTo: number
  sortBy: string
}

export const sortMap = {
  newest: "По времени (новые)",
  oldest: "По времени (старые)",
  ratingAsc: "По оценке (по возрастанию)",
  ratingDesc: "По оценке (по убыванию)",
}
