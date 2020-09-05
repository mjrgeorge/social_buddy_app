import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import PostDetails from './components/postDetails/PostDetails';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/post/:postId">
          <PostDetails/>
        </Route>
        <Route path = "/post/:postId">
          <Comments/>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
