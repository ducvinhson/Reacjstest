import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from '../src/features/Album/pages/index';
import TodoFeature from '../src/features/Todo/Pages/index';
import './App.css';
import Header from './components/Headerr/index';
import CartFeatures from './features/Cart/index';
import CounterFeature from './features/Counter/index';
import ProductFeature from './features/Product/index';
function App() {
  return (
    <div className = "app">
      <Header/>
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeatures} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
