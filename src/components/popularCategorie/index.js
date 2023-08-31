import React from 'react'

//css file 
import './index.scss'

const index = () => {
  return (
    <section className='jobCategorie'>
      <div className='jobCategorie__details'>
          <div className='jobCategorie__details__content'>
            <h3>popular categories</h3>
            <p>20+ Categories work wating for you</p>
          </div>
          <div className='jobCategorie__details__jobAmount'>
            <div className='jobCategorie__details__jobAmount__jobPost'>
              <h4>90</h4>
              <p>job posted</p>
            </div>
            <div className='jobCategorie__details__jobAmount__taskPost'>
            <h4>225</h4>
              <p>task posted</p>
            </div>
            <div className='jobCategorie__details__jobAmount__freelancer'>
            <h4>75</h4>
              <p>freelancers</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default index;
