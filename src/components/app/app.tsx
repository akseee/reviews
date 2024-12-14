import "../../index.css"
import { SetupForm } from "../setup/setup"
import { Table } from "../table/table"
import styles from "./app.module.css"

const App = () => {
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
