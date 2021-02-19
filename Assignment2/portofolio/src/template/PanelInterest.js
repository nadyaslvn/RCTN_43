import React from 'react';
// import MenuList from '../moleculs/MenuList';
// import InterestDiv from '../moleculs/InterestDiv';
import Content from '../atoms/Content';
import '../App.css';

export default class PanelInterest extends React.Component {
  render() {
    return (
      <div className="Panel">
        {/* <InterestDiv /> */}
        <Content 
          title="Interest"
          description="I like to do things"
        />
      </div>
    )
  }
}