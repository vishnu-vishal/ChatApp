import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    // <div className='navbar'>
    //     <div>
    //         <img src='./menu-burger.png' alt='' style={{height:'25px',padding:'20px'}}/>
    //     </div>
    //     <div  className='navimg' >
    //         <img src='./search.png' alt='' style={{height:'25px',padding:'20px'}}/>
    //         <img src='./contact.png' alt='' style={{height:'25px',padding:'20px'}}/>
    //     </div>
    // </div>
    <div className='navbar'>
      <span className='logo'>ChatApp</span>
      <div className='user'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.0l7k5zqRUVQ5Yq9eTpW2LgHaLJ&pid=Api&P=0&h=180" alt=""/>
        <span>vishanth</span>
      </div>
    </div>
  )
}

export default Navbar