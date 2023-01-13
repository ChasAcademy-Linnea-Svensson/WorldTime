import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './Start';
import Footer from './Footer';
import SingleClock from './SingleClock';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className='w-full'>
        <nav className='flex justify-between p-8 bg-blue-400 items-center'>
          <h1 className='text-4xl font-extrabold text-white'>
            <Link exact='true' to='/'>
              World Time
            </Link>
          </h1>

          <ul className='flex space-x-4'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact='true' path='/' element={<Start />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/clock/:cityKey' element={<SingleClock />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
