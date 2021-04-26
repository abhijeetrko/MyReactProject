
import Menu from './Menu'
import NavLinks from './NavLinks'
import Title from './Title'
import Contact from './Contact'
import BudgetManagement from './BudgetManagement'
import Login from './Login'
import RecordManagement from './RecordManagement'
import Location from './Location'
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

function App() {
  

 return (
    <Router>
      <NavLinks></NavLinks>
     <Switch>
    <div className="App">

    <Route exact path="/">
    <Title></Title>
    </Route>
    <Route exact path="/title">
    <Title></Title>
    </Route>
    <Route exact path="/Budget">
     <BudgetManagement></BudgetManagement>
     </Route>
     <Route exact path="/Contact">
    <Contact></Contact>
     </Route>
     <Route exact path="/Login">
   <Login></Login>
     </Route>

     <Route exact path="/Record">
   <RecordManagement></RecordManagement>
     </Route>
     <Route exact path="/Location">
    <Location></Location>
     </Route>
     
 
    </div>
    </Switch>
    </Router>
  );
}

export default App;