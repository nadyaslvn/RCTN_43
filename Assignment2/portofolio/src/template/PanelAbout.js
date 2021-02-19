import React from 'react';
// import MenuList from '../moleculs/MenuList';
import Content from '../atoms/Content';
import '../App.css';

export default class PanelAbout extends React.Component {
  render() {
    return (
      <div className="Panel">
        <Content 
          title="About"
          description="Hello! My name is Nadya"
        />
        
      </div>
    )
  }
}