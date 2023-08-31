import React from 'react'
import SearchBox from '../searchBox'
import './index.scss'

const index = () => {
  return (
    <section className='heroSection'>
        <p>find jobs, employment & career opportunities</p>
      <h2>search between more then <br/> <span>50,000</span> open jobs.</h2>
      <SearchBox />
    </section>
  )
}

export default index 