import React, { useRef } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Redirect, BrowserRouter } from 'react-router-dom';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    "&$selected": {
      backgroundColor: "orange",
      color: "white"
    },
    "&$selected:hover": {
      backgroundColor: "#c4481c",
      color: "white"
    },
    "&:hover": {
      backgroundColor: "#ac4420",
      color: "white"
    },
    textAlign: "center",
  },
}));

class Menu extends React.Component {
// export default function MenuList() {
  

  render() {
    return (
      <div className="nav-bar">
          <Link to="/about">ABOUT</Link>
          <Link to="/experience">EXPERIENCE</Link>
          <Link to="/education">EDUCATION</Link>
          <Link to="/skill">SKILLS</Link>
          <Link to="/interest">INTERESTS</Link>
          <Link to="/award">AWARDS</Link>
      </div>
    )
  }
}

export default Menu;