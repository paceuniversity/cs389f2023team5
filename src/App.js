import logo from './logo.svg';
import { Auth } from '@supabase/auth-ui-react';
import supabase from './db/supa';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import './App.css';
import { useState, useEffect } from 'react';
import Diary from './components/Diary';
import About from './components/About';
import Contact from './components/Contact';
import Log from './components/Log';
import DefaultContact from './components/DefaultContact';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { signOut } from './components/signOut';

function App() {
  const name = "Rohn";
  const city = "NYC";
  let [count, setCount] = useState(0);
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
      <div className="App">
        <Router>
          <ul>

            <li><Link to="/">Diary</Link></li>
            <li><Link to ="/about/${name}">About</Link></li>
            <li><Link to ="/log">Log</Link></li>
            <li><Link to ="/signOut">sign Out</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component = {Diary} />
            <Route path="/about/:name" component = {About}/>
            <Route path="contact" exact component={DefaultContact} />
            <Route path="contact/:name/:city" component={Contact} />
            <Route path="/log" component={Log} />
            <Route path="/signOut" component={signOut} />
            <Route render={() => <h3>404: Page not found </h3>} />
          </Switch>
        </Router>  
      </div>
    );
  }

 
}

export default App;
