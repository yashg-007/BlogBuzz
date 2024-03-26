import React from 'react'

function Container({className='',children}) {
  return <div className={`w-full max-w-7xl mx-auto px-4 ${className}`}>{children}</div>;
  
}

export default Container