
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SignIn, Home } from './pages';
import LinearChart from './Components/LinearChart';

const Proof = () =>(<p>Usuarios</p>)
const Proof2 = () =>(<p>Clientes</p>)
const App = () => {
  return (
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}>
        <Route path='/estadisticas' element={<LinearChart/>}/>
        <Route path='/usuarios' element={<Proof/>}/>
        <Route path='/clientes' element={<Proof2/>}/>
      </Route>
    </Routes>
  );
}

export default App;
