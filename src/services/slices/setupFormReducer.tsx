import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  formData: {
    platform: "google",
    ratingFrom: 1,
    ratingTo: 5,
    sortBy: "newest",
  },
}

const setupFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, { payload }) {
      console.log(payload)
      state.formData = payload
    },
    resetFormData() {
      return { formData: initialState.formData }
    },
  },
})

export const { setFormData, resetFormData } = setupFormSlice.actions
export default setupFormSlice.reducer
