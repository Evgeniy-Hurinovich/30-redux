import BList from './components/BList/BList'
import BForm from './components/BForm/BForm'
import Filter from './components/Filter/Fiter'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Task-manager</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BList />
        </div>
      </main>
    </div>
  )
}

export default App

// {/* <h6>
//   Our company provides services for maintenance, repair, installation and
//   configuration of climate systems.
// </h6> */}
