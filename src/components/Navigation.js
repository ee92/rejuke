import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UploadContainer from '../containers/Upload'
import LibraryContainer from '../containers/Library'
import PlayerContainer from '../containers/Player'

const Navigation = () => (
  <Router>
    <Switch>
      <Route path='/listen/:id' component={PlayerContainer}/>
      <Route path='/upload' exact component={UploadContainer}/>
      <Route path='/library' exact component={LibraryContainer}/>
    </Switch>
  </Router>
)

export default Navigation
