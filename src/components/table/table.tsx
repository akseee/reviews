import styles from "./table.module.css"
import { Row } from "./row"
import { RootState, useSelector } from "../../services/store"

export const Table = () => {
  const reviews = useSelector((state: RootState) => state.form.reviews)

  const handleSort = (type: string) => {
    console.log("sorting by ", type)
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
