import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/:page?" element={<Home />} />
    </Routes>
  )
}

export default App
