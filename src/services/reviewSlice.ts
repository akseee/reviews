import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { platformMap, Platforms, Review, SortBy } from "../utils/constants"

export interface FormData {
  platform: Platforms
  ratingFrom: number
  ratingTo: number
  sortBy: SortBy | ""
}

interface State {
  formData: FormData
  reviews: Review[]
  originalReviews: Review[]
}

const initialState: State = {
  formData: {
    platform: "any",
    ratingFrom: 1,
    ratingTo: 5,
    sortBy: "",
  },
  reviews: [],
  originalReviews: [],
}

const reviewSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, { payload }: PayloadAction<FormData>) {
      state.formData = payload
    },

    resetFormData(state) {
      state.formData = initialState.formData
    },

    setReviews(state, { payload }: PayloadAction<Review[]>) {
      state.reviews = payload
      state.originalReviews = payload
    },

    applySettings(state) {
      const { platform, ratingFrom, ratingTo, sortBy } = state.formData

      let filteredReviews = [...state.originalReviews]

      if (platform !== "any") {
        filteredReviews = filteredReviews.filter(
          (review) => review.platform === platformMap[platform]
        )
      }

      filteredReviews = filteredReviews.filter(
        (review) => review.rating >= ratingFrom && review.rating <= ratingTo
      )

      state.reviews = filteredReviews

      if (sortBy === "newest") {
        state.reviews.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      } else if (sortBy === "oldest") {
        state.reviews.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      } else if (sortBy === "ratingAsc") {
        state.reviews.sort((a, b) => a.rating - b.rating)
      } else if (sortBy === "ratingDesc") {
        state.reviews.sort((a, b) => b.rating - a.rating)
      }
    },
  },
})

export const { setFormData, resetFormData, setReviews, applySettings } =
  reviewSlice.actions

export default reviewSlice.reducer
