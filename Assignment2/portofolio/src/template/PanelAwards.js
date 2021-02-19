import React from 'react';
// import MenuList from '../moleculs/MenuList';
import Content from '../atoms/Content';
import '../App.css';

export default class PanelAwards extends React.Component {
  render() {
    return (
      <div className="Panel">
        {/* <AwardsDiv /> */}
        <Content 
          title="Awards"
          description="Here's what my awards"
        />
      </div>
    )
  }
}