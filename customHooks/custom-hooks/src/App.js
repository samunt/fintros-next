import React from 'react';
import Toggler from "./Toggler";
import CounterClass from './CounterClass';
import CounterHooks from './hooks/CounterHooks';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormInputHook from "./SimpleFormInputHook";
import Clicker from "./Clicker";
import StarWarsMovies from "./StarWarsMovies";
function App() {
  return (
    <div className="App">
        <h5>Counter as a class</h5>
        <CounterClass/>
        <h5>simepl useState - Counter hooks</h5>
        <CounterHooks/>
        <h5>custom hook useState - Toggler Hook</h5>
        <Toggler/>
        <h5>Class based form no hook</h5>
        <SimpleFormClass/>
        <h5>useState - Simple Form Input Hook</h5>
        <SimpleFormInputHook/>
        <br/>
        <h5>useEffect hook</h5>
        <Clicker/>
        <br/><br/>
        <h5>Complex use effect hook</h5>
        <StarWarsMovies/>
    </div>
  );
}

export default App;
