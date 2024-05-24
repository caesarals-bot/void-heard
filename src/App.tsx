
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { NavBarPage } from './ui/navBar/page/NavBarPage'

function App() {

  return (
    <BrowserRouter>
      <NavBarPage />    
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
