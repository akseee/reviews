import { useState } from "react"
import clsx from "clsx"

import styles from "./setup.module.css"
import { initialStateForm, sortMap } from "../../utils/constants"

import { useDispatch, useSelector } from "../../services/store"
import {
  resetFormData,
  setFormData,
  applySettings,
} from "../../services/reviewSlice"

import { RadioBox } from "../ui/radiobox/radiobox"

export const SetupForm = () => {
  const dispatch = useDispatch()

  const { platform, ratingFrom, ratingTo, sortBy } = useSelector(
    (state) => state.form.formData
  )

  const [setupData, setSetupData] = useState<initialStateForm>({
    platform: platform,
    ratingFrom: ratingFrom,
    ratingTo: ratingTo,
    sortBy: sortBy,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    const newValue = name.includes("rating") ? parseInt(value, 10) : value

    setSetupData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setFormData(setupData))
    dispatch(applySettings())
  }

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(resetFormData())
    setSetupData({
      platform: "any",
      ratingFrom: 1,
      ratingTo: 5,
      sortBy: "",
    })
    dispatch(applySettings())
  }

  return (
    <div className={clsx(styles.container)}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <fieldset className={styles.filer}>
          <legend className={styles.title}>Фильтрация</legend>
          <label className={styles.platform}>
            <span>по платформе</span>
            <select
              value={setupData.platform}
              onChange={handleChange}
              name="platform"
              className={styles.square}
            >
              <option value="any">Все</option>
              <option value="google">Google</option>
              <option value="yandex">Яндекс</option>
              <option value="2gis">2ГИС</option>
            </select>
          </label>
          <label className={styles.score}>
            <span>по оценкам</span>
            <input
              value={setupData.ratingFrom}
              onChange={handleChange}
              className={styles.square}
              type="number"
              name="ratingFrom"
              placeholder="рейтинг от"
              min="1"
              max={setupData.ratingTo}
              step="1"
            />

            <input
              value={setupData.ratingTo}
              onChange={handleChange}
              className={styles.square}
              type="number"
              name="ratingTo"
              placeholder="рейтинг до"
              min={setupData.ratingFrom}
              max="5"
              step="1"
            />
          </label>
        </fieldset>

        <fieldset className={styles.sort}>
          <legend className={styles.title}>Сортировка</legend>
          {Object.entries(sortMap).map(([key, label], index) => {
            return (
              <RadioBox
                key={index}
                name={"sortBy"}
                value={key}
                checked={setupData.sortBy === key}
                onChange={handleChange}
              >
                {label}
              </RadioBox>
            )
          })}
        </fieldset>

        <div className={styles.buttons}>
          <button className={clsx(styles.submit, styles.button)} type="submit">
            Подтвердить
          </button>
          <button className={clsx(styles.reset, styles.button)} type="reset">
            Очистить
          </button>
        </div>
      </form>
    </div>
  )
}
