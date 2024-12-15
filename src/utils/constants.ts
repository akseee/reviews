export type SortBy = "newest" | "oldest" | "ratingAsc" | "ratingDesc"

export type Platforms = "yandex" | "google" | "2gis" | "any"

export type initialStateForm = {
  platform: Platforms
  ratingFrom: number
  ratingTo: number
  sortBy: SortBy | ""
}

export interface Review {
  id: number
  platform: Platforms
  rating: number
  date: string
  text: string
}

export const platformMap: Record<Platforms, string> = {
  yandex: "Яндекс",
  google: "Google",
  "2gis": "2ГИС",
  any: "any",
}

export const sortMap: Record<SortBy, string> = {
  newest: "По времени (новые)",
  oldest: "По времени (старые)",
  ratingAsc: "По оценке (по возрастанию)",
  ratingDesc: "По оценке (по убыванию)",
}

export interface FormData {
  platform: Platforms
  ratingFrom: number
  ratingTo: number
  sortBy: SortBy | ""
}
