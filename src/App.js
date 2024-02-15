import './App.css';
import { Pagination } from './components/MachineCoding/Pagination';
import { UserInput } from './components/MachineCoding/DebouncingAndThrottel/UserInput';
import { Stopwatch } from './components/MachineCoding/Stopwatch';
import { ThisKeyword } from './components/Javascript/ES6/ThisKeyword';
import { Closures } from './components/Javascript/ES6/Closures';
import { Todos } from './components/MachineCoding/Todos';
import { StarRating } from './components/MachineCoding/StarRating';
import { JavascriptQuestions } from './components/Javascript/JavascriptQuestions';
import { ReduxCounter } from './components/MachineCoding/ReduxCounter';
import { NestedCheckbox } from './components/MachineCoding/NestedCheckbox';
import NestedFolders from './components/MachineCoding/NestedFolders';
import { explorer } from './data/explorer';
import { LetVarAndConst } from './components/Javascript/ES6/LetVarAndConst';
import { TodosWithAPI } from './components/MachineCoding/TodosWithAPI';

function App() {
  return (
    <div className="App">
    {/* <UserInput /> */}
    {/* <Pagination /> */}
    {/* <Stopwatch /> */}
    {/* <ThisKeyword /> */}
    {/* <Closures /> */}
    {/* <Todos /> */}
    {/* <StarRating /> */}
    {/* <ReduxCounter /> */}
    {/* <JavascriptQuestions />
    <NestedCheckbox /> */}
    <NestedFolders explorer={explorer} />
    <LetVarAndConst />
    {/* <TodosWithAPI /> */}
    </div>
  );
}

export default App;
