import "../../index.css"
import { Setup } from "../setup/setup"
import styles from "./app.module.css"

const App = () => {
  return (
    <div className={styles.page}>
      <main>
        <Setup></Setup>
      </main>
    </div>
  )
}

export default App
