import ShowMovies from "./components/ShowMovies"
import AddMovie from "./components/AddMovie"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MovieDetail from "./components/MovieDetail"
import UpdateMovie from "./components/UpdateMovie"
import SideBar from "./components/SideBar"
import RegistrationPage from "./components/RegistrationPage"
import LoginPage from "./components/LoginPage"
import PrivateRoute from "./utils/PrivateRoute"

import { AuthProvider } from './utils/AuthContext'
import AdminRoute from "./utils/AdminRoute"

const App = () => {
    return (
    
        <div id="wrapper">
        <Router>
        <AuthProvider>
        <SideBar />
        
            <Switch>
                
                <PrivateRoute exact path="/" component={ShowMovies} />
                <AdminRoute exact path="/addmovie" component={AddMovie} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/login" component={LoginPage} />
                <PrivateRoute exact path="/:id" component={MovieDetail} />
                <PrivateRoute exact path="/:id/update" component={UpdateMovie} />
                
            </Switch>
        </AuthProvider>
        </Router>
        </div>
    
    )
}

export default App
