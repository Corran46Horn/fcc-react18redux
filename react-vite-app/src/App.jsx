import './App.css';
import Navbar from './tutorial/04-project-structure/starter/Navbar';
//import Final from './tutorial/01-useState/final/03-useState-array';
import {
  Football,
  Basketball,
} from './tutorial/04-project-structure/starter/Example';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Football />
      <Basketball />
    </div>
  );
}

export default App;
