import ShowMovies from "./components/movies/ShowMovies"
import AddMovie from "./components/movies/AddMovie"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MovieDetail from "./components/movies/MovieDetail"
import UpdateMovie from "./components/movies/UpdateMovie"
import SideBar from "./components/SideBar"
import RegistrationPage from "./components/RegistrationPage"
import LoginPage from "./components/LoginPage"
import PrivateRoute from "./utils/PrivateRoute"

import { AuthProvider } from './utils/AuthContext'
import AdminRoute from "./utils/AdminRoute"
import ShowUsers from "./components/users/ShowUsers"
import UserDetail from "./components/users/UserDetail"
import AddUser from "./components/users/AddUser"
import UpdateUser from "./components/users/UpdateUser"

const App = () => {
    return (
    
        <div id="wrapper">
        <Router>
        <AuthProvider>
        <SideBar/>
        
            <Switch>
                 
                <PrivateRoute exact path="/" component={ShowMovies} />
                <AdminRoute exact path="/addmovie" component={AddMovie} />
                <AdminRoute exact path="/adduser" component={AddUser} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/users" component={ShowUsers} />
                <Route exact path="/users/:id" component={UserDetail} />
                <Route exact path="/users/:id/update" component={UpdateUser} />
                <PrivateRoute exact path="/:id" component={MovieDetail} />
                <PrivateRoute exact path="/:id/update" component={UpdateMovie} />
                
            </Switch>
        </AuthProvider>
        </Router>
        </div>
    
    )
}

export default App
