import React from 'react';
import MenuList from '../moleculs/MenuList';
// import MenuList from '../moleculs/Menu';
import logo from '../logo.svg';
import '../App.css';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="Nav-bar">
        <img src={logo} className="App-logo" alt="logo" />
        <MenuList />
      </div>
    )
  }
}