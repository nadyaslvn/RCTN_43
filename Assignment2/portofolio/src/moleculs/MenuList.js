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

export default function MenuList() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return (
      <div className="nav-bar">
          <List component="nav" id="listStyle">
            <ListItem className={classes.item} button component={Link} to="/" selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
              <ListItemText primary="Home"/>
            </ListItem>
            <ListItem className={classes.item} button component={Link} to="/about" selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
              <ListItemText primary="About"/>
            </ListItem>
            <ListItem className={classes.item} button component={Link} to="/experience" selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
              <ListItemText primary="Experience"/>
            </ListItem>
            <ListItem className={classes.item} button component={Link} to="/skills" selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
              <ListItemText primary="Skills"/>
            </ListItem>
            <ListItem className={classes.item} button component={Link} to="/interest" selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4)}>
              <ListItemText primary="Interest" />
            </ListItem>
            <ListItem className={classes.item} button component={Link} to="/awards" selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
              <ListItemText primary="Awards" />
            </ListItem>
          </List>
      </div>
    )
}