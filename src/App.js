
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Lowernavbar from './components/Lowernavbar.jsx'
import Section from './components/Section.jsx'
import Sidesection from './components/Sidesection.jsx'


export default function App(){

    return(
      <div>
    
      <Navbar/>
      <Lowernavbar/>
      <Section/>
      <Sidesection/>
      
      </div>

    )
}