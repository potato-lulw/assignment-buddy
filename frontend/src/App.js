import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/navbar';
import AddAssignment from './components/add-assignment';

function App() {
  return (
    <div className="App bg-secondary h-auto min-h-[100vh] text-primary">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add-assignment' element={<AddAssignment/>}/> 
          </Routes>
        </div>
      </BrowserRouter>
      


    </div>
  );
}

export default App;