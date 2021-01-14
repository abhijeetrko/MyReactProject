
import Menu from './Menu'
import NavLinks from './NavLinks'
import Title from './Title'
import Contact from './Contact'
import BudgetManagement from './BudgetManagement'
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

function App() {
 return (
    <Router>
      <NavLinks></NavLinks>
     <Switch>
    <div className="App">
    <Route exact path="/title">
    <Title></Title>
    </Route>
    <Route exact path="/Budget">
     <BudgetManagement></BudgetManagement>
     </Route>
     <Route exact path="/Contact">
    <Contact></Contact>
     </Route>
 
    </div>
    </Switch>
    </Router>
  );
}

export default App;