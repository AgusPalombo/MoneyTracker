import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
        <h1>$400 <span>.00</span></h1>
        <form>
          <div>
            <input type="text" placeholder={'+200000 nueva tv Samsung'}/>
            <input type="datetime-local"/>
          </div>
          <div>
            <input type="text" placeholder={'descripcion'}/>
          </div>
        </form>
    </main>
  );
}

export default App;
