import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import LabelView from "./views/LabelerView";
import Labeled from "./views/LabeledView";
import ErrorView from "./views/ErrorView";

class App extends React.Component {

  render() {
    return (

       <main>
       <Switch>
           <Route path="/" component={LabelView} exact />
           <Route path="/saved-documents" component={Labeled} />
           <Route component={ErrorView} />
       </Switch>
   </main>
    )
  }
}
export default App;