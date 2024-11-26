import { useState} from "react"
import FaBars from 'react-icons/fa'
import { links, social } from '../useref/data'
import logo from '/vite.svg'


function Navbar() {
  const [showLinks,setShowLinks] = useState(false)
  
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div> 
      <div className={`${showLinks ? 'links-container':'show-container'}`}>
        <ul className='links'>
          {links.map((link) => {
            return(
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
                </li>
            )
          })}
          </ul>
        </div>
        
        <ul className='social-icons'>
         {social.map((socials)=> {
          const IconComponent = socials.icon
          return(
          <li key={socials.id}>
          <a href={socials.url}><IconComponent /></a>
          </li>
          )
         })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar