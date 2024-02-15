
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignIn, Home, UserManager, BasicDashboard,  ClientManager } from './pages';

const Proof2 = () =>(<p>Clientes</p>)

const App = () => {
  return (
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}>
        <Route path='/estadisticas' element={<BasicDashboard />}/>
        <Route path='/usuarios' element={<UserManager />}/>
        <Route path='/clientes' element={<ClientManager/>}/>
      </Route>

    </Routes>
  );
}

export default App;
