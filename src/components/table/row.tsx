import { FC } from "react"
import styles from "./row.module.css"
import clsx from "clsx"

type RowProps = {
  data: {
    id: number
    platform: string
    rating: number
    date: string
    text: string
  }
}

export const Row: FC<RowProps> = ({ data }) => {
  return (
    <tr key={data.id} className={styles.row}>
      <td className={styles.platform}>{data.platform}</td>
      <td
        className={clsx(
          styles.rating,
          data.rating < 3 && styles.low,
          data.rating > 4 && styles.high
        )}
      >
        {data.rating}
      </td>
      <td className={styles.date}>
        {new Date(data.date).toLocaleDateString()}
      </td>
      <td className={styles.text}>{data.text}</td>
    </tr>
  )
}
