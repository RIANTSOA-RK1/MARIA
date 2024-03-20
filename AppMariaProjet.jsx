import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Gestion from './pages/GestionDesComptes/Gestion'
import Transaction from './pages/transaction/Transaction'
import Solde from './pages/solde/Solde'
import Home from './pages/Home/Home'
import Retrait from './pages/Retrait/Retrait'





function AppMariaProjet() {

  return (
     <div>
 
              <Router>
              <Sidebar/>
                 <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route path='/gestion'><Gestion/></Route>
                    <Route path="/retrait"><Retrait/></Route>
                    <Route path='/transaction'><Transaction/></Route>
                    <Route path='/solde'><Solde/></Route>
                    <Route><h1 className='text-center mt-5'>cette Page n'xiste pas</h1></Route>
                 </Switch>
              </Router>
              
           
       
     </div>
  )
}

export default AppMariaProjet
