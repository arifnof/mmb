import logo from './logo.svg'
import foto_pp from './assets/img/Untitled.png'
import './App.css'
import MyComponent from './components/MyComponent'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import ProfileInfo from './components/ProfileInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileInfo nama="John" role="staff" />

        <img src={logo} className="App-logo" alt="logo" />
        <img src={foto_pp} alt="foto-pp" />
        <p>Hello world dari React JS Toko Arnof</p>
        <MyComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassComponent />
        <FunctionalComponent />
      </header>
    </div>
  )
}

export default App
