import './style.css';
import List from '../components/List';
import profesores from '../data/profesores';

const App = () => {
  const mensaje = "Prueba de React.JS con Mensajes"; 
  const mensaje3 = "By Juan Felipe O. ";

  return (
    <div className="App">
      <header className="App-header">
        <h2>{mensaje}</h2>  
      </header>
      <List list={profesores}/>

      <footer className='App-footer'>
      <h3>{mensaje3}</h3>
      </footer>
    </div>
  );
}

export default App;
