import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Counter from './components/Counter.js';
import DefaultContact from './components/DefaultContact.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Goal from './components/Goal.js';
import { Auth } from '@supabase/auth-ui-react';
import supabase from './db/supa';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useState, useEffect } from 'react';
import { signOut } from './components/signOut';

function App() {
  const name = "John";
  const city = "NYC";
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
  else
    return (
      <Container>
        <Router>
          <ul>
            <li>
              <Link to="/">Goal</Link>
            </li>
            <li><Link to="/">Diary</Link></li>

              <li><Link to ="/about/${name}">About</Link></li>

              <li><Link to ="/log">Log</Link></li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to={`/contact/${name}/${city}`}>Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Goal} />
            <Route path="/about/:name" component={About} />
            <Route path="/contact" exact component={DefaultContact} />
            <Route path="/contact/:name/:city" component={Contact} />
            <Route path="/counter" component={Counter} />
            <Route render={() => <h3>404: Page not found</h3>} />
          </Switch>
        </Router >
      </Container>
    );
}

export default App;