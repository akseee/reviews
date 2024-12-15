import { useEffect } from "react"
import "../../index.css"
import { useDispatch } from "../../services/store"
import { SetupForm } from "../setup/setup"
import { Table } from "../table/table"
import styles from "./app.module.css"
import { loadReviews } from "../../services/action"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadReviews())
  }, [dispatch])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SetupForm></SetupForm>
        <Table></Table>
      </main>
    </div>
  )
}

export default App
