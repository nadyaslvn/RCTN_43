import React from 'react';
// import MenuList from '../moleculs/MenuList';
// import SkillsDiv from '../moleculs/SkillsDiv';
import Content from '../atoms/Content';
import '../App.css';

export default class PanelSkills extends React.Component {
  render() {
    return (
      <div className="Panel">
        {/* <SkillsDiv /> */}
        <Content 
          title="Skills"
          description="I'm capable of doing"
        />
      </div>
    )
  }
}