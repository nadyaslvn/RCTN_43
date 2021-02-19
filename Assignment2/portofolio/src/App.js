import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './template/NavigationBar';
import About from './template/PanelAbout';
import Experience from './template/PanelExperience';
import Home from './template/PanelHome';
import Skills from './template/PanelSkills';
import Interest from './template/PanelInterest';
import Awards from './template/PanelAwards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/interest" component={Interest} />
          <Route path="/awards" component={Awards} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
