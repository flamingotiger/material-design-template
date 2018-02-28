import React, { Component } from 'react';
import { Lists, Tab, Posts, Charts, Search, Nomatch } from './route/pages';
import { Material, Design, Ui, Template} from './route/pages/list';
import { Slide, Tabmenu, Swipe} from './route/pages/tabs';
import { Todo, Post } from './route/pages/Post';
import { Srch } from './route/pages/Srch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/base.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-intro">
            <Switch>
              <Route exact path="/" component={Lists}/>
              <Route exact path="/lists" component={Lists}/>
                <Route path="/lists/material" component={Material}/>
                <Route path="/lists/design" component={Design}/>
                <Route path="/lists/ui" component={Ui}/>
                <Route path="/lists/template" component={Template}/>
              <Route exact path="/tab" component={Tab}/>
                <Route path="/tab/slide" component={Slide}/>
                <Route path="/tab/tabmenu" component={Tabmenu}/>
                <Route path="/tab/swipe" component={Swipe}/>
              <Route exact path="/posts" component={Posts}/>
                <Route exact path="/posts/todo" component={Todo}/>
                <Route exact path="/posts/post" component={Post}/>
              <Route exact path="/charts" component={Charts}/>
              <Route exact path="/search" component={Search}/>
                <Route exact path="/search/search" component={Srch}/>
              <Route component={Nomatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
