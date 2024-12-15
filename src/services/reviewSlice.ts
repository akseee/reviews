import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Review {
  id: number
  platform: string
  rating: number
  date: string
  text: string
}

interface FormData {
  platform: string
  ratingFrom: number
  ratingTo: number
  sortBy: string
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
      console.log(platform, ratingFrom, ratingTo, sortBy)
    },
  },
})

export const { setFormData, resetFormData, setReviews, applySettings } =
  reviewSlice.actions

export default reviewSlice.reducer
