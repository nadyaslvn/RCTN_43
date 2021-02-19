import React from 'react';
// import MenuList from '../moleculs/MenuList';
// import ExperienceDiv from '../moleculs/ExperienceDiv';
import Content from '../atoms/Content';
import '../App.css';

export default class PanelExperience extends React.Component {
  render() {
    return (
      <div className="Panel">
        {/* <ExperienceDiv /> */}
        <Content 
          title="Experience"
          description="I have been experiencing"
        />
      </div>
    )
  }
}