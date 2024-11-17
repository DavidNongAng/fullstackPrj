import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' elements={<Dashboard/>}/>
            <Route path='/login' elements={<Login/>}/>
            <Route path='/register' elements={<Register/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
