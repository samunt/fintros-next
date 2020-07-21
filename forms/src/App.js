import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import FormComponent from './Components/FormComponent'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div>
            <h1>Links</h1>
            <Switch>
                <Route extact="true" path="/forms" render={() => <FormComponent/>}/>
            </Switch>
        </div>
    )
  }
}

export default App;
