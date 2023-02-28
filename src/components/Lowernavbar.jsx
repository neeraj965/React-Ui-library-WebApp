import './Ui.scss'
import { GoMarkGithub } from "react-icons/go";
// import {Link} from 'react-router-dom'
export default function Lowenavbar(){

return(
  
    <div className='low'>
   
    <pre>
           Products         Docs          Pricing           About us               Blog

           <input type="text" placeHolder='
           🔍
           Search...' style={{backgroundColor:'lavender',opacity:'0.3',borderRadius:'7px',marginLeft:'20em'}}/>

         <a href='https://github.com/abhishek72340' target='_blank'><GoMarkGithub style={{position:'absolute',marginLeft:'4em',fontSize:'1.8em',marginTop:'-0.3em',opacity:'0.8',color:'blue'}}/></a>
    </pre>
   
    
    </div>
)
}