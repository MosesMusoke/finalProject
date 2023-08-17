import './App.css'
import LandingPage from './LandingPage'
import ServicesSection from './ServicesSection'
import TrainingsSection from './TrainingsSection'
import Contact from './Contact'
import { createContext, useState } from 'react';
import AboutUsSection from './About'
import LoginButton from './LoginButton'
import LogOutButton from './LogOutButton'
import Profile from './Profile'

export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('dark')

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  // ContextApi is going to enable us implement the light and dark mode switching by letting us move the switching functionality throughout our application.

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light'? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <header className="header p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-white font-bold text-xl">QuickService</div>

            {/* Navigation Buttons (Visible on larger screens) */}
            <nav className="navs hidden md:flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-lg">
                Home
              </a>
              <a href="#about" className="text-white hover:text-lg">
                About
              </a>
              <a href="#services" onClick={() => {toggleServices}} className="text-white hover:text-lg">
                Services
              </a>
              <a href="#training" className="text-white hover:text-lg">
                Our Training
              </a>
              <a href="#contact" className="text-white hover:text-lg">
                Contact Us
              </a>
            </nav>

            <LoginButton />
            <LogOutButton />
            

            {/* Button to display Navigation Buttons (Visible on smaller screens) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-gray-900"
            >
              Menu
            </button>

            {/* Navigation Buttons (Visible on smaller screens when the button is clicked) */}
            {showMenu && (
              <nav className="navs md:hidden flex flex-col justify-center space-y-2 mt-4 absolute bottom-2 right-5">
                <a href="#" className="text-white hover:text-md">
                  Home
                </a>
                <a href="#about" className="text-white hover:text-lg">
                  About
                </a>
                <a href="#services" className="text-white hover:text-lg">
                  Services
                </a>
                <a href="#training" className="text-white hover:text-lg">
                  Our Training
                </a>
                <a href="#contact" className="text-white hover:text-lg">
                  Contact Us
                </a>
              </nav>
            )}

            <Profile />
            

            
          </div>
        </header>
        <main className='app'>
          <LandingPage />
          <AboutUsSection />
          <ServicesSection />
          <TrainingsSection />
          <Contact />
        </main>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
