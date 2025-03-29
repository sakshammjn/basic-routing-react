import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import NotFound from './components/NotFound';
import { Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';


// navlink attaches the active link when clicked
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>  
          </li>

          <li>
            <NavLink to='/support'>Support</NavLink>  
          </li>

          <li>
            <NavLink to='/about'>About</NavLink>  
          </li>

          <li>
            <NavLink to='/labs'>Labs</NavLink>  
          </li>
        </ul>
      </nav>

      {/* parent routes and children routes */}
      <Routes>
        <Route path='/' element={<MainHeader/>} > 
          {/* childres routes */}
          {/* index means default route */}
          <Route index element={<Home/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/labs' element={<Labs/>} />
          <Route path='*' element={<NotFound/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
