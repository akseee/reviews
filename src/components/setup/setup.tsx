import { useState } from "react"
import { RadioBox } from "../ui/radiobox/radiobox"
import styles from "./setup.module.css"
import clsx from "clsx"

// type SetupFormProps = {
//   platform: string
//   ratingFrom: number
//   ratingTo: number
//   sortBy: string
// }

// const initialState: SetupFormProps = {
//   platform: "",
//   ratingFrom: 1,
//   ratingTo: 5,
//   sortBy: "newest",
// }

export const SetupForm = () => {
  const [selectedSort, setSelectedSort] = useState("newest")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleReset = (e) => {
    e.preventDefault()
  }

  const handleSelectChange = (e) => {
    console.log(e.target.value)
  }

  const handleRatingChange = (e) => {
    if (e.target.name === "ratingFrom") {
      console.log("ratingFrom")
      console.log(e.target.value)
    }
    if (e.target.name === "ratingTo") {
      console.log("ratingTo")
      console.log(e.target.value)
    }
  }

  const sortMap = {
    newest: "По времени (новые)",
    oldest: "По времени (старые)",
    ratingAsc: "По оценке (по возрастанию)",
    ratingDesc: "По оценке (по убыванию)",
  }

  return (
    <div className={clsx(styles.container)}>
      <form className={styles.form}>
        <fieldset className={styles.filer}>
          <legend className={styles.title}>Фильтрация</legend>
          <label className={styles.platform}>
            <span>по платформе</span>
            <select
              onChange={handleSelectChange}
              name="platform"
              className={styles.square}
            >
              <option value="google">Google</option>
              <option value="yandex">Яндекс</option>
              <option value="2gis">2ГИС</option>
            </select>
          </label>
          <label className={styles.score}>
            <span>по оценкам</span>
            <input
              onChange={handleRatingChange}
              className={styles.square}
              type="number"
              name="ratingFrom"
              placeholder="рейтинг от"
              min="1"
              max="5"
              step="1"
            />

            <input
              onChange={handleRatingChange}
              className={styles.square}
              type="number"
              name="ratingTo"
              placeholder="рейтинг до"
              min="1"
              max="5"
              step="1"
            />
          </label>
        </fieldset>

        <fieldset className={styles.sort}>
          <legend className={styles.title}>Сортировка</legend>

          {Object.entries(sortMap).map(([key, label]) => {
            return (
              <RadioBox
                name={key}
                value={key}
                checked={selectedSort === key}
                onChange={() => {
                  setSelectedSort(key)
                }}
              >
                {label}
              </RadioBox>
            )
          })}
        </fieldset>

        <div className={styles.buttons}>
          <button
            className={clsx(styles.submit, styles.button)}
            type="submit"
            onClick={handleSubmit}
          >
            Подтвердить
          </button>
          <button
            className={clsx(styles.reset, styles.button)}
            type="reset"
            onClick={handleReset}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
}
