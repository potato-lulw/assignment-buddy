import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import AddAssignment from './components/add-assignment';
import { UserContext } from './context/userContextProvider';
import { useContext } from 'react';
import AddUser from './components/add-user';
import OpenSource from './components/open-source';
import Footer from './components/footer';
import EditAssignment from './components/edit-assignment';

function App() {
  const { userName } = useContext(UserContext);

  return (
    <div className="App bg-secondary flex flex-col min-h-screen text-primary">
      <OpenSource />
      <BrowserRouter>
        <Navbar />

        <div className="flex-1 pages">
          <Routes>
            {!userName && <Route path="/" element={<AddUser />} />}
            {userName && (
              <>
                <Route path="/" element={<AddUser />} />
                <Route path="/home" element={<Home />} />
                <Route path="/add-assignment" element={<AddAssignment />} />
                <Route path="/edit-assignment" element={<EditAssignment/>} />
              </>
            )}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
