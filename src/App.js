import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/service/:servicesId" element={
          <RequiredAuth>
            <ServiceDetails></ServiceDetails>
          </RequiredAuth>
        } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />



      </Routes>
    </>

  );
}

export default App;
