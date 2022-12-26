import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, TicketPage } from './pages'
import { Nav } from './components'
import CategoriesContext from './context'
import { useState } from 'react'


const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }
  return (
    <div className="app">

      <CategoriesContext.Provider value={value}>

        <BrowserRouter>
          <Nav />
          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />

          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App;
