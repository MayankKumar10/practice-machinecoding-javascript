import logo from './logo.svg';
import './App.css';
import { Pagination } from './components/MachineCoding/Pagination';
import { UserInput } from './components/MachineCoding/DebouncingAndThrottel/UserInput';
import { Stopwatch } from './components/MachineCoding/Stopwatch';

function App() {
  return (
    <div className="App">
    {/* <UserInput /> */}
    {/* <Pagination /> */}
    <Stopwatch />
    </div>
  );
}

export default App;
