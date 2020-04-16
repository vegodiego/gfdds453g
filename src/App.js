import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
          {/*Aca deben ir los links de navegacion*/}
        </nav>


        <Switch>
          <Redirect from='/page1' to='/' />
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>

        {/* Aca tienes que agreager algo para que las rutas funcionen*/}
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = () => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = () => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = () => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
