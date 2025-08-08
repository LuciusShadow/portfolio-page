import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../scss/App.scss'

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
      <div className='navbar'>
        <div className="navbar__name">John Doe</div>
        <div className="navbar__container">
          <button /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button">About</button>
          <button /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button">Services</button>
          <button /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button">Skills</button>
          <button /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button">Certifications</button>
          <button /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button">Projects</button>
          <button /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button">Contact</button>
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
