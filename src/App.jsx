import React, { useState } from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignIn from './components/SignIn';

const App = () => {

  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleCloseSignIn = () => {
    setShowSignIn(false);
  };

  return (
<>
<Navbar onSignInClick={handleSignInClick} />
{showSignIn && <SignIn onClose={handleCloseSignIn} />} 
<div className="max-w-7xl mx-auto pt-20 px-6"> 
<HeroSection />
<Features />
<Workflow />
<Price />
<Testimonials />
<Footer />
</div>
</>
  )
}

export default App;
