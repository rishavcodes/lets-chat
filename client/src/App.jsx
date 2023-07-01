import axios from "axios"
import { UserContextProvider } from "./UserContext"
import Routes from "./Routes"

function App() {
  axios.defaults.baseURL = 'http://localhost:4040'
  axios.defaults.withCredentials = true // to set cookies from api
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
