import { useState } from "react"
import { reviews } from "../../utils/reviews"
import styles from "./table.module.css"
import { Row } from "./row"

export const Table = () => {
  const [data] = useState(reviews)

  const handleSort = (type: string) => {
    console.log(type)
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
        {data.map((item) => {
          return <Row data={item} />
        })}
      </tbody>
    </table>
  )
}
