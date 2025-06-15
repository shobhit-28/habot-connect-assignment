import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homePage/homePage'
import { InstituteSpecificPage } from './pages/instituteSpecificPage/instituteSpecificPage'
// import { NavBar } from './components/NavBar/navBar'

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/institute/:instituteId" element={<InstituteSpecificPage />}/>
        {/* <Route path='/' element={<HomePage />} /> */}
      </Routes>
    </>
  )
}