import { useState } from 'react';
import './App.css';
//import { KivalasztContext } from './context/KivalasztContext.js';
import Kategoriak from './components/Kategoriak';
import { adatok } from './adatok/adatok';
import Kivalasztott from './components/Kivalasztott';

function App() {
  const [kivalasztottLista, setKivalasztottLista] = useState([]);

  function kivalaszt(ertek) {
    const a = kivalasztottLista;
    a.push(ertek);
    setKivalasztottLista([...a]);
  }
  return (
    <div className='container'>
      <header className='App-header'>
        <h1>React Context Api</h1>
      </header>
      <section>
        <h5>Kiválaszott virágok</h5>
        <Kivalasztott lista={kivalasztottLista} />
      </section>
      <article>
      
        <Kategoriak lista={adatok} kivalaszt={kivalaszt} />
      </article>
      <aside>
      </aside>
      <footer>
      </footer>
    </div>
  );
}

export default App;
