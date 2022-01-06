/** @jsxImportSource @emotion/react */
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';

import './index.css';


function App() {
  return (
    <div className='body'>
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
