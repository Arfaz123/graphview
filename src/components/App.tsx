import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import './App.css'
import Home from 'pages/Home'
import 'reactflow/dist/style.css'
import UserActivity from 'pages/Useractivity'

function App() {
  return (
    <div>
      <Home>
        <UserActivity />
      </Home>
    </div>
  )
}

export default App
