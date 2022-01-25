import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col items-center justify-center'>
        <div className='mx-2 bg-green-400'>Elemento 1</div>
        <div className='mx-2 bg-green-900'>Elemento 2</div>
        <div className='mx-2 bg-blue-500'>Elemento 3</div>
        <div className='mx-2 bg-yellow-500'>Elemento 4</div>
        <button className='border-2 border-blue-500 p-4 bg-lime-200 text-gray-400 hover:text-gray-700 hover:bg-green-100 rounded-lg shadow-xl shadow-orange-100 hover:scale-125'>Haz click acá</button>
        <button className='border-2 border-blue-500 p-4 bg-lime-200 text-gray-400 hover:text-gray-700 hover:bg-green-100 rounded-lg shadow-xl shadow-orange-100 hover:scale-125'>Otro botón</button>
      </div>
    </div>
  );
}

/* Tailwind borra por defecto lo que tiene el navegador se cuera que el navegador tiene unas vainas por defecto? */
export default App;
