import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './contexts/AuthContext'
import ValidateRoute from './components/ValidateRoute'
import Profile from './Pages/Profile/Profile'
import Principal from './Pages/Principal/Principal'
import PostPage from './Pages/Post/PostPage'
import NavBar from './components/NavBar'
import Browser from './Pages/Browser/Browser'
import Discover from './Pages/Discover/Discover'
import RegisterPage from './Pages/RegisterPage'

function App() {

  return (
  <AuthProvider>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<ValidateRoute/>}>
          <Route path='/:username' element={<Profile/>}/>
          <Route path='/' element={<Principal/>}/>
          <Route path='/post/:postId' element={<PostPage/>}/>
          <Route path='/browser' element={<Browser/>}/>
          <Route path='/discover' element={<Discover/>}/>
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

