import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  const routes = (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/dash' element={ <Dashboard /> } />
    </Routes>
  )
  return (
    <>
      <NavBar />
      { routes }
    </>
  );
}

export default App;
