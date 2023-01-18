import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import { HomePage} from "./pages";
import {RegisterPage} from './pages/register'
import {SignInPage} from './pages/rignln'
import {DetailPage}from './pages/detail'
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact  component={HomePage}/>
        <Route path='/signIn' component={SignInPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/DetailPage/:touristRouteId' component={DetailPage} />
        <Route render={()=>{ return <h1>404 not found 页面去火星了!</h1>}}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
