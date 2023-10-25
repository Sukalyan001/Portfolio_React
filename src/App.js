import React, { useState, useEffect } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 5000)
  }, []);
  return (
    <>
      
        <div className='bg-black h-screen '  >
          {load ?
            <div className='flex h-[600px]   '>
              <PacmanLoader
                color={'#03fcdf'}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
                className=' load'
                
              />
            </div>
          
        :
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

          <Header />
          <Banner />
          <Nav />
          <About />
          <Services />
          <Work />
          <Contact />
          {/* <div className='h-[4000px]'></div> */}

        </div>
        }
      </div>

    </>
  );
};

export default App;
