import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoChevronDownOutline} from 'react-icons/io5'
import {BiChevronDown} from 'react-icons/bi'

// css file 
import  "./index.scss"

const index = () => {
  return (
    <div className='searchBox'>
      <div className='searchBox__inputBox'><input  type='text' placeholder='Job, Title, Keywords or Phrase' /> <AiOutlineSearch /></div>
      <div className='searchBox__inputBox'><input type='text' placeholder='City, State or ZIP' /> <IoChevronDownOutline /> </div>
      <div className='searchBox__inputBox'><input type='text' placeholder='Select Area' /> <BiChevronDown /> </div>
      <button type='button'>Find Job</button>
    </div>
  )
}

export default index
