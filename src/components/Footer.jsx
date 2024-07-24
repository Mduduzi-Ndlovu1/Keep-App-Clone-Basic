import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    
    <footer>
        &copy; {year} Google Keep basic Clone. All rights reserved
    </footer>
  )
}

export default Footer