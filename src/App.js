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
import { NestedCheckbox } from './components/MachineCoding/NestedCheckbox/NestedCheckbox';
import NestedFolders from './components/MachineCoding/NestedFolders';
import { explorer } from './data/explorer';
import { LetVarAndConst } from './components/Javascript/ES6/LetVarAndConst';
import { TodosWithAPI } from './components/MachineCoding/TodosWithAPI';
import { NestedCheckbox1 } from './components/MachineCoding//NestedCheckbox/NestedCheckbox1';
import { NestedCheckBox2 } from './components/MachineCoding/NestedCheckbox/NestedCheckBox2';
import { Nestedfolders1 } from './components/MachineCoding/Nestedfolders1';
import { DisplayChecbox } from './components/MachineCoding/NestedCheckbox/DisplayChecbox';
import { DisplayNestedComments } from './components/MachineCoding/Nested Comments/DisplayNestedComments';
import { NestedCheckbox3 } from './components/MachineCoding/NestedCheckbox/NestedCheckbox3';
import { AddingFilesAsInput } from './components/MachineCoding/AddingFilesAsInput';
import { FetchingData } from './components/Javascript/Fetching/FetchingData';

function App() {

  let carData = [
    {
      brand: "Maruti",
      cars: ["swift", "desire", "baleno"]
    },
    {
      brand: "Hyundai",
      cars: ["I10", "I20", "creta"]
    },
  ]




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
     */}
    {/* <Nestedfolders1 explorer={explorer} /> */}
    {/* <NestedFolders explorer={explorer} />
    <LetVarAndConst /> */}
    {/* <TodosWithAPI /> */}
    {/* <DisplayNestedComments /> */}

    {/* <NestedCheckbox /> */}
      {/* <NestedCheckbox1 /> */}
    {/* <NestedCheckBox2 carData={carData} DisplayChecbox={DisplayChecbox} /> */}

    {/* <NestedCheckbox3 /> */}
    {/* <AddingFilesAsInput /> */}
    <FetchingData />
    </div>
  );
}

export default App;
