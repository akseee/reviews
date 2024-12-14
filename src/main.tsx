import React from "react"
import * as ReactDOMClient from "react-dom/client"

import "./index.css"
import { Provider } from "react-redux"
import store from "./services/store.ts"
import App from "./components/app/App.tsx"

const container = document.getElementById("root") as HTMLElement
const root = ReactDOMClient.createRoot(container!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
