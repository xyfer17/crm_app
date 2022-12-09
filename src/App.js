import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, TicketPage } from './pages'
import { Nav } from './components'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
