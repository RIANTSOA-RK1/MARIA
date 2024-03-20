import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Gestion from './pages/GestionDesComptes/Gestion'
import Transaction from './pages/transaction/Transaction'
import Solde from './pages/solde/Solde'
import Home from './pages/Home/Home'
import Retrait from './pages/Retrait/Retrait'
import { Toaster } from 'react-hot-toast'
import ProfilUser from './pages/ProfilUser/ProfilUser'





function AppMariaProjet() {

  return (
     <div>
     <Toaster/>
 :
              <Router>
              <Sidebar/>
                 <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/profilUser/:id'><ProfilUser/></Route>
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
