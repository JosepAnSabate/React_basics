import logo from './logo.svg';
import './App.css';
import {DisplayMapClass} from './components/DisplayMapClass'
import Foot from './components/Foot';
import { DisplayMapFC } from './components/DisplayMapFunction';

function App() {
  return (
    <div>
    <DisplayMapFC />
    <Foot />
    </div>
  );
}

export default App;
