import React from 'react';
import Main from './Views/Main';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = {"/:productId/edit"} render={(routeProps) => <EditarProducto {...routeProps}/>}/>
          <Route exact path = {"/:productId"} render={(routeProps) => <MostarProducto {...routeProps}/>}/>
          <Route exact path = {"/"} render={(routeProps) => <Main {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;