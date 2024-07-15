import React from 'react';
import Router from './components/pages/Router';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Router/>
      <Footer />
     
    </div>
  );
}

export default App;
