import logo from './logo.svg';
import './App.css';
import FormValidation from './pages/form-validate';
import FetchFormData from './pages/fetch-form-data';
import Home from './pages/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <FormValidation />
    //   <FetchFormData />
    // </div>
    <Router>
    <Navbar />
    <Routes>
        <Route path='/getDetails' element={<FetchFormData/>} />
        <Route exact path='/' element={<FormValidation/>} />
    </Routes>
    </Router>
  );
}

export default App;
