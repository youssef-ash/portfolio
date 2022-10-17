import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
