import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './Store/appContext';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from './components/Header';
import Inicio from './Pages/Inicio';
import Canchas from './Pages/Canchas';

function App() {
  return (
    <UserProvider>
      <Router className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/:cancha' element={<Canchas />} />
          </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
