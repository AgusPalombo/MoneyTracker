import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
        <h1>$400 <span>.00</span></h1>
        <form>
          <input type="text" placeholder={'+200000 nueva tv Samsung'}/>
          <input type="datetime-local"/>
          <input type="text" placeholder={'descripcion'}/>
        </form>
    </main>
  );
}

export default App;
