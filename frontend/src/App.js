import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/navbar';
import AddAssignment from './components/add-assignment';
import { UserContext, UserContextProvider } from './context/userContextProvider';
import { useContext } from 'react';
import AddUser from './components/add-user';

function App() {

  const { userName } = useContext(UserContext);
  console.log(userName)
  return (
    
    

      <div className="App bg-secondary h-auto min-h-[100vh] text-primary">
        <BrowserRouter>
          <Navbar />

          <div className="pages">
            <Routes>
              {!userName && <Route path="/" element={<AddUser />}/>}
              {userName && (
                <>
                  <Route path="/home" element={<Home />} />
                  <Route path="/add-assignment" element={<AddAssignment />} />
                </>
              )}

            </Routes>
          </div>


        </BrowserRouter>

      </div>


    

  );
}

export default App;
