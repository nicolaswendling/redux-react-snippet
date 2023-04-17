import ReactDOM from "react-dom/client"
import App from "./pages/App"
import {Provider} from "react-redux"
import store from "./states/store"
import "./assets/styles/styles.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
