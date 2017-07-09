import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Join, Lobby, NewRoom, Room} from "../index"

const App = () => (
  <div>
    <ul>
      <li><Link to='/'>Join</Link></li>
      <li><Link to='/lobby'>Lobby</Link></li>
      <li><Link to='/new-room'>NewRoom</Link></li>
      <li><Link to='/room/'>Room</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Join}/>
      <Route exact path="/lobby" component={Lobby}/>
      <Route exact path="/new-room" component={NewRoom}/>
      <Route exact path="/room" component={Room}/>
    </Switch>
  </div>
)

export default App
