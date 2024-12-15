import styles from "./table.module.css"
import { Row } from "./row"
import { RootState, useDispatch, useSelector } from "../../services/store"
import { applySettings, setFormData } from "../../services/reviewSlice"

export const Table = () => {
  const dispatch = useDispatch()

  const reviews = useSelector((state: RootState) => state.form.reviews)
  const formData = useSelector((state: RootState) => state.form.formData)

  const handleSort = (type: string) => {
    if (type !== "platform") {
      let currentSort = formData.sortBy

      if (type === "rating") {
        currentSort = currentSort === "ratingAsc" ? "ratingDesc" : "ratingAsc"
      } else if (type === "date") {
        currentSort = currentSort === "newest" ? "oldest" : "newest"
      }
      dispatch(setFormData({ ...formData, sortBy: currentSort }))
    }

    if (type === "platform") {
      console.log(type)
      let currentPlatform = formData.platform
      currentPlatform =
        currentPlatform === "any"
          ? "yandex"
          : currentPlatform === "yandex"
          ? "google"
          : currentPlatform === "google"
          ? "2gis"
          : "any"
      dispatch(setFormData({ ...formData, platform: currentPlatform }))
    }

    dispatch(applySettings())
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          <th
            className={styles.sortable}
            onClick={() => handleSort("platform")}
          >
            Платформа
          </th>
          <th className={styles.sortable} onClick={() => handleSort("rating")}>
            Рейтинг
          </th>
          <th className={styles.sortable} onClick={() => handleSort("date")}>
            Дата
          </th>
          <th>Отзыв</th>
        </tr>
      </thead>
      <tbody className={styles.rowContainer}>
        {reviews.map((item, index) => {
          return <Row data={item} key={index} />
        })}
      </tbody>
    </table>
  )
}
