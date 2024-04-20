import './App.css'
import Contact from './components/Contact'
import Discover from './components/Discover'
import Evolution from './components/Evolution'

import Hero from './components/Hero'

function App() {
  return (
    <div className="App" class="bg-background-main">
      <Hero />
      <div class="px-10 lg:px-4">
        <Discover />
        <Evolution />
        <Contact />
      </div>
      <svg
        style={{ visibility: 'hidden', position: 'absolute' }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default App
