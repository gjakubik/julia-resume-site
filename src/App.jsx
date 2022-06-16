/** @jsxImportSource @emotion/react */
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Contact    from './components/Contact';

import './index.css';


function App() {
  return (
    <div css={{width: '100vw', overflowX: 'hidden'}}>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
