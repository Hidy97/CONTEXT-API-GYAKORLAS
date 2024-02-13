import './App.css';
import { KivalasztContext } from './context/KivalasztContext.js';
import Kategoriak from './components/Kategoriak';
import { adatok } from './adatok/adatok';
import Kivalasztott from './components/Kivalasztott';
import { KivalasztProvider } from './context/KivalasztContext.js';

function App() {
  return (
    <div className='container'>
      <header className='App-header'>
        <h1>React Context Api</h1>
      </header>

      <KivalasztProvider>
        <section>
          <h5>Kiválaszott virágok</h5>
          <Kivalasztott />
        </section>
        <article>
         
            <Kategoriak lista={adatok} />
          
        </article>
      </KivalasztProvider>

      <aside>
      </aside>
      <footer>
      </footer>
    </div>
  );
}

export default App;
