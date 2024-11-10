import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>Product</h1>}/>
        <Route path='/add' element={<h1>Add Product</h1>}/>
        <Route path='/update' element={<h1>Update Product</h1>}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
