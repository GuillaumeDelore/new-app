import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LayoutProvider } from './layouts'
import './style/main.css'
import { Backdrop } from '#components/Backdrop'
import { QueryClient, QueryClientProvider } from 'react-query'

const LazyDashboard = lazy(() => import('#pages/Dashboard'))
const LazyMarkets = lazy(() => import('#pages/Markets'))
const LazyAccess = lazy(() => import('#pages/Access'))
const LazyBorrow = lazy(() => import('#pages/Borrow'))

const queryClient = new QueryClient({})

function App() {

  return (
    
    <QueryClientProvider client={queryClient}>
      
        <LayoutProvider>
          <Suspense fallback={<Backdrop />}>
            <Routes>
              <Route path="/markets" element={<LazyMarkets />} />
              <Route path="/dashboard" element={<LazyDashboard />} />
              <Route path="/access" element={<LazyAccess />} />
              <Route path="/" element={<LazyDashboard />} />
              <Route path="*" element={<Navigate to="dashboard" />} />  
            </Routes>
          </Suspense>
        </LayoutProvider>
    </QueryClientProvider>
   
  )
}

export default App


