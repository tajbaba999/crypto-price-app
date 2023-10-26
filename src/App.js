import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Exchange from './components/Exchange';
import Coins from './components/Coins';
import Coindetail from './components/Coindetail';

function App() {
  return (
   <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/coin/:id' element={<Coindetail/>}/>
      </Routes>
   </Router>
  );
}

export default App;
