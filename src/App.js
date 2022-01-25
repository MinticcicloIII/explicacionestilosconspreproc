import './App.css';

function App() {
  return (
    /* Para que sea responsive es usa el md: i.e que cuando est pantalals mediana para arriba le va a disribuir en row, pero pa
    mas peques hace el row en columnnas*/
    <div className="App">
      <div className='flex flex-col md:flex-row'> 
        <div className='mx-2 bg-green-400'>Elemento 1</div>
        <div className='mx-2 bg-green-900'>Elemento 2</div>
        <div className='mx-2 bg-blue-500'>Elemento 3</div>
        <div className='mx-2 bg-yellow-500'>Elemento 4</div>
        <button className='boton'>Haz click acá</button>
        <button className='boton'>Otro botón</button>
      </div>
    </div>
  );
}

/* Tailwind borra por defecto lo que tiene el navegador se cuera que el navegador tiene unas vainas por defecto? */
export default App;
