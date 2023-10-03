import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FilterAndSearchContextProvider } from './context/FilterAndSearchContext.tsx'
import { PaginationContextProvider } from './context/paginationContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <FilterAndSearchContextProvider>
      <PaginationContextProvider>
        <App />
      </PaginationContextProvider>
    </FilterAndSearchContextProvider>
  </BrowserRouter>,
)
