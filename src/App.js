import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type='email'/>
        <input type='file'/>
        <input type='number' max={10}/>
        <input type='password'/>
        <input type='text' required/>
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
