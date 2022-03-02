import logo from './logo.svg';
import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div>
       <h1>react app router</h1>
       <div>
         <Link to="home">
           <p>home</p>
         </Link>
         <Link to="contact">
          <p>contact</p> 
         </Link>
       </div>
       <Routes>
         <Route path='home' element={<Home/>}/>
         <Route path='contact' element={<Contact/>}/>
       </Routes>
    </div>
  );
}

export default App;
