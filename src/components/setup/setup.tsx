import { SyntheticEvent } from "react"
import styles from "./setup.module.css"
import clsx from "clsx"

export const Setup = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    console.log(e)
  }

  const handleReset = (e: SyntheticEvent) => {
    console.log(e)
  }

  return (
    <div className={clsx(styles.container)}>
      <form className={styles.form}>
        <fieldset className={styles.filer}>
          <legend className={styles.title}>Фильтрация</legend>
          <label className={styles.platform}>
            <span>по платформе</span>
            <select name="platform" className={styles.square}>
              <option value="google">Google</option>
              <option value="yandex">Яндекс</option>
              <option value="2gis">2ГИС</option>
            </select>
          </label>
          <label className={styles.score}>
            <span>по оценкам</span>
            <input
              className={styles.square}
              type="number"
              name="ratingFrom"
              placeholder="рейтинг от"
              min="1"
              max="5"
              step="1"
              value={1}
            />

            <input
              className={styles.square}
              type="number"
              name="ratingTo"
              placeholder="рейтинг до"
              min="1"
              max="5"
              step="1"
              value={5}
            />
          </label>
        </fieldset>

        <fieldset className={styles.sort}>
          <legend className={styles.title}>Сортировка</legend>
          <div>
            <input type="radio" name="sort" id="newest" value="newest" />
            <label htmlFor="newest"> По времени (новые)</label>
          </div>
          <div>
            <input type="radio" name="sort" value="oldest" id="oldest" />
            <label htmlFor="oldest"> По времени (старые) </label>
          </div>
          <div>
            <input type="radio" name="sort" value="ratingAsc" id="ratingAsc" />
            <label htmlFor="ratingAsc"> По оценке (по возрастанию)</label>
          </div>
          <div>
            <input
              type="radio"
              name="sort"
              value="ratingDesc"
              id="ratingDesc"
            />
            <label htmlFor="ratingDesc"> По оценке (по убыванию)</label>
          </div>
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
