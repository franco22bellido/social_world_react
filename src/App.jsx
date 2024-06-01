import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import LoginPage from './Pages/LoginPage'
import { AuthProvider } from './contexts/AuthContext'
import ValidateRoute from './components/ValidateRoute'
import Profile from './Pages/Profile/Profile'
import Principal from './Pages/Principal/Principal'
import PostPage from './Pages/Post/PostPage'
import Browser from './Pages/Browser/Browser'
import Discover from './Pages/Discover/Discover'
import RegisterPage from './Pages/RegisterPage'
import NavBar from './components/NavBar'
import AutoLogin from './components/AutoLogin'
import FollowersPage from './Pages/Followers/FollowersPage'
import FollowingsPage from './Pages/Followers/FollowingsPage'

function App() {

  return (
  <AuthProvider>
    <BrowserRouter >
    <NavBar/>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<ValidateRoute/>}>
          <Route path='/' element={<Principal/>}/>
          <Route path='/:username' element={<Profile/>}/>
          <Route path='/post/:postId' element={<PostPage/>}/>
          <Route path='/browser' element={<Browser/>}/>
          <Route path='/discover' element={<Discover/>}/>
          <Route path='/coments/:postId' element={<></>}/>
          <Route path='/likes/:postId' element={<></>}/>
          <Route path='/:username/followers' element={<FollowersPage/>}/>
          <Route path='/:username/following' element={<FollowingsPage/>}/>
        </Route>
        <Route path='/usertest/:test' element={<AutoLogin/>}/>
      </Routes>
    </BrowserRouter>
    
  </AuthProvider>
  )
}

export default App

