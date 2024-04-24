import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './contexts/AuthContext'
import ValidateRoute from './components/ValidateRoute'

function App() {

  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<></>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<ValidateRoute/>}>
          <Route path='/username' element={<></>}/>
          <Route path='/' element={<></>}/>
          <Route path='/post/:postId' element={<></>}/>
          <Route path='/coments/:postId' element={<></>}/>
          <Route path='/likes/:postId' element={<></>}/>
          <Route path='/followers/:username' element={<></>}/>
          <Route path='/following/:username' element={<></>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  )
}

export default App

