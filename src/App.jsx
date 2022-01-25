import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './components/Dropdown';
import Tarjeta from './components/Tarjeta';
import Tarjetota from './components/Tarjetota';

function App() {
  return (
    <div className="App">
      <span className="fondoNegro">Hola mundo</span>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <div>Esto es un div</div>
      <Dropdown />
      <div>Esto es un div</div>
      <Tarjeta/>
      <div>Esto es un div</div>
      <Tarjetota/>
    </div>
  );
}

export default App;
