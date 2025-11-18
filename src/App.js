import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './components/Counter.js';
import DefaultContact from './components/DefaultContact.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Goal from './components/Goal.js';
import CalCalc from './components/CalCalc.js';
import Diary from './components/Diary.js';
import Log from './components/Log.js';
import { useState, useEffect } from 'react';
import { signOut } from './components/signOut';
import './index.css';
import Navbar from './components/Navbar';
import Regimen from './components/Regimen.js';
import Exercise from "./exerciseInfo/Exercise.js";
import RegimenCalc from './components/RegimenCalc.js';
import Find from './components/Find.js'
import Faq from './components/Faq.js';
import Feedback from './components/Feedback.js';
import Home from './components/Home.js';
import Tools from './components/tools.js'
import Friends from './components/Friends.js';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/exercise" exact component={Exercise} />
              <Route path="/friends" exact component={Friends} />
              <Route path="/find" exact component={Find} />
              <Route path="/regimencalc" exact component={RegimenCalc} />
              <Route path="/regimen" exact component={Regimen} />
              <Route path="/" exact component={Home} />
              <Route path="/goal" exact component={Goal} />
              <Route path="/diary" exact component={Diary} />
              <Route path="/about/:name" component={About} />
              <Route path="contact" exact component={DefaultContact} />
              <Route path="contact/:name/:city" component={Contact} />
              <Route path="/log" component={Log} />
              <Route path="/calcalc" exact component={CalCalc} />
              <Route path="/signOut" component={signOut} />
              <Route path="/counter" component={Counter} />
              <Route path="/faq" component={Faq} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/tools" component={Tools} />
              <Route render={() => <h3>404: Page not found</h3>} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

// import logo from './logo.svg';
// import supabase from './db/supa';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
// import './App.css';
// import { useState, useEffect } from 'react';
// import Diary from './components/Diary';
// import About from './components/About';
// import Contact from './components/Contact';
// import Log from './components/Log';
// import DefaultContact from './components/DefaultContact';
// import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import { signOut } from './components/signOut';

// function App() {
  // const name = "Rohn";
  // const city = "NYC";
  // let [count, setCount] = useState(0);
  // const [session, setSession] = useState(null)
  // const supabase = createClient("https://eilymrhzimawhwaeqobo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpbHltcmh6aW1hd2h3YWVxb2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNDEyMTEsImV4cCI6MjAxNDYxNzIxMX0.bp6heCDwjm_cH30PJ1XGc87tPS9rB2aXeE_UcUKQWAQ");

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  // if (!session) {
  //   return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  // }
  // else {
//     return (
//       <Container>
//         <Router>
//           <ul>
//             <li>
//               <Link to="/">Goal</Link>
//             </li>
//             <li>
//               <Link to="/calcalc">Calorie Calculator</Link>
//             </li>
//             <li><Link to="/diary">Diary</Link></li>

//               <li><Link to ="/about/${name}">About</Link></li>

//               <li><Link to ="/log">Log</Link></li>
//             <li>
//               <Link to="/counter">Counter</Link>
//             </li>
//             <li>
//               <Link to={`/contact/${name}/${city}`}>Contact</Link>
//             </li>
//             <li><Link to ="/signOut">sign Out</Link></li>
//           </ul>
//           <Switch>
//             <Route path="/" exact component={Goal} />
//             <Route path="/calcalcg" exact component={CalCalc} />
//             <Route path="/diary" exact component = {Diary} />
//             <Route path="/about/:name" component = {About}/>
//             <Route path="contact" exact component={DefaultContact} />
//             <Route path="contact/:name/:city" component={Contact} />
//             <Route path="/log" component={Log} />
//             <Route path="/signOut" component={signOut} />
//             <Route path="/counter" component={Counter} />
//             <Route render={() => <h3>404: Page not found</h3>} />
//           </Switch>
//         </Router >
//       </Container>
//     )
//   }

 
// }

// export default App;