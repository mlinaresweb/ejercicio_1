import logo from './logo.svg';
import './App.css';
import ComponentB from './components/componentB';
import { Contacto } from "./components/contacto";

function App() {

  const DefaultContact = new Contacto ('Manel', 'Linares', 'Ghaedesigns@gmail.com', true)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentB contacto={DefaultContact}> </ComponentB>
      </header>
    </div>
  );
}

export default App;
