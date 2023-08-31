import React, {Fragment} from 'react';
import Navbar from './components/navbar/';
import HeroSection from './components/heroSection'
import JobCategorie from './components/popularCategorie'

const App = () => {
  return (
    <Fragment>
     <Navbar />
     <HeroSection />
     <JobCategorie />
    </Fragment>
  )
}

export default App
