import React from 'react'
import Tv from '../Product-pages/tv'
import Mobile from '../Product-pages/Mobile'
import Laptop from '../Product-pages/Laptop'
import Headsets from '../Product-pages/Headsets'
import Cpucooler from '../Product-pages/Cpucooler'
import Pc from '../Product-pages/Pc'

function Product({handleClick}) {
  return (
    <div className='mt-32'>
      <Pc handleClick={handleClick}/>
      <Tv handleClick={handleClick} />
      <Mobile handleClick={handleClick} />
      <Laptop handleClick={handleClick} />
      <Headsets handleClick={handleClick}/>
      <Cpucooler handleClick={handleClick}/>
    </div>
  )
}

export default Product
