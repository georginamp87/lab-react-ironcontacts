import logo from './logo.svg';
import './App.css';
import contactsJson from './contacts.json' 
import Contacts from './components/Contacts.js';

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Contacts/>
    </div>
  );
}

export default App;
