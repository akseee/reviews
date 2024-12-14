import "../../index.css"
import { SetupForm } from "../setup/setup"
import styles from "./app.module.css"

const App = () => {
  return (
    <div className={styles.page}>
      <main>
        <SetupForm></SetupForm>
      </main>
    </div>
  )
}

export default App
