import { call, put, takeLatest } from "redux-saga/effects"
import { Review, setReviews } from "./reviewSlice"

const fetchReviews = async () => {
  const response = await fetch("/reviews.json")
  const data = await response.json()
  return data
}

function* loadReviewsSaga() {
  try {
    const reviews: Review[] = yield call(fetchReviews)
    yield put(setReviews(reviews))
  } catch (error) {
    console.error("Error loading reviews:", error)
  }
}

export function* watchFetchReviews() {
  yield takeLatest("reviews/loadReviews", loadReviewsSaga)
}
