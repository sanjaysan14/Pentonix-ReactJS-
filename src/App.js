import'./App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Data } from './pages/Data';
import { FData } from './pages/FData';
import { Info } from './pages/Info'; 
import { Us } from './pages/Us';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link } from "react-router-dom";
//import DataService from './pages/DataService';
import Swal from 'sweetalert2'


function App() {

  const handleclick = () =>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data Fetch Successfully!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
    return (
      <BrowserRouter >
      <div className='App'> 
      
        <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand  as={Link} to="/">PENTONIX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/info">Info</Nav.Link>
            <Nav.Link as={Link} to="/data">Data</Nav.Link>
            <Nav.Link as={Link} onClick={handleclick} to="/fdata">Fetch Data</Nav.Link>
          </Nav>
        </Container> 
      </Navbar> 
      
      <div>
        <Routes>
        <Route path='/'  element={<Us/>}/>
        <Route path='/info'  element={<Info/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path='/fdata' element={<FData/>}/>
        </Routes>
      </div>
      </div>
      </BrowserRouter>
    );
  
}

export default App