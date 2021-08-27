import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from '../src/features/Album/pages/index';
import TodoFeature from '../src/features/Todo/Pages/index';
import productApi from './api/productApi';
import './App.css';
import CounterFeature from './features/Counter/index';
import Header from './components/Headerr/index';
import  Button  from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList)
    };
    fetchProducts();
  }, []);
  return (
    <div className = "app">
      <Header/>
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        {/* <Route component={NotFound} /> */}
      </Switch>
      Footer
    </div>
  );
}

export default App;
