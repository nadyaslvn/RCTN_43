import React from 'react';
// import MenuList from '../moleculs/MenuList';
import Content from '../atoms/Content';
import '../App.css';

export default class PanelHome extends React.Component {
  render() {
    return (
      <div className="Panel">
        {/* <EducationDiv /> */}
        <Content 
          title="Home"
          description="Welcome to the Homepage"
        />
      </div>
    )
  }
}