
import Menu from './Menu'
import Title from './Title'
import BudgetManagement from './BudgetManagement'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Title></Title>
     <BudgetManagement></BudgetManagement>
 
    </div>
    </Router>
  );
}

export default App;