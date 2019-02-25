import Home from './containers/Home';
import Login from './containers/Login';
import React from 'react';
import { Route } from 'react-router-dom';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'Home',
  },{
    path: '/login',
    component: Login,
    exact: true,
    key: 'Login',
  }
];
