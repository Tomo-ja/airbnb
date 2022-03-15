import image1 from './image/img_make-up.jpg'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card img={image1}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
      />
    </div>
  );
}

export default App;
