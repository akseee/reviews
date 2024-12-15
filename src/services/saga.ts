import { call, put, takeLatest } from "redux-saga/effects"
import { setReviews } from "./reviewSlice"

const fetchReviews = async () => {
  console.log("Fetching reviews...")
  const response = await fetch("/reviews.json")
  const data = await response.json()
  console.log("Reviews fetched:", data)
  return data
}

function* loadReviewsSaga() {
  try {
    const reviews = yield call(fetchReviews)
    yield put(setReviews(reviews))
  } catch (error) {
    console.error("Error loading reviews:", error)
  }
}

export function* watchFetchReviews() {
  yield takeLatest("form/loadReviews", loadReviewsSaga)
}
