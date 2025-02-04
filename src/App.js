import logo from './logo.svg'
import './styles/home.scss'
import Navbar from './components/Layout/Navbar';
import MainPage from './components/MainPage';
import Tooling from './components/Tooling';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Tooling />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
