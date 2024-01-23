import logo from './logo.svg'
import './styles/home.scss'
import Navbar from './components/Layout/Navbar';
import MainPage from './components/MainPage';
import Tooling from './components/Tooling';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Tooling />
      <Projects />
    </div>
  );
}

export default App;
