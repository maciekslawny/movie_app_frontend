import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./utils/AuthContext";
import AdminRoute from "./utils/AdminRoute";
import UserPage from "./components/users/UserPage";
import UserAdd from "./components/users/UserAdd";
import UserUpdate from "./components/users/UserUpdate";
import MovieAdd from "./components/movies/MovieAdd";
import MovieUpdate from "./components/movies/MovieUpdate";
import MoviesList from "./components/movies/MoviesList";
import MoviePage from "./components/movies/MoviePage";
import UsersList from "./components/users/UsersList";
import ActorsList from "./components/actors/ActorsList";
import ActorAdd from "./components/actors/ActorAdd";
import ActorUpdate from "./components/actors/ActorUpdate";
import ActorPage from "./components/actors/ActorPage";
import DirectorsList from "./components/directors/DirectorsList";
import DirectorPage from "./components/directors/DirectorPage";
import DirectorUpdate from "./components/directors/DirectorUpdate";
import DirectorAdd from "./components/directors/DirectorAdd";

const App = () => {
  return (
    <div id="wrapper">
      <Router>
        <AuthProvider>
          <SideBar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopBar />
              <Switch>
                <PrivateRoute exact path="/movies/add" component={MovieAdd} />
                <PrivateRoute
                  exact
                  path="/movies/update/:id"
                  component={MovieUpdate}
                />
                <PrivateRoute exact path="/movies/:id" component={MoviePage} />
                <PrivateRoute exact path="/movies" component={MoviesList} />
                <PrivateRoute exact path="/actors/add" component={ActorAdd} />
                <PrivateRoute
                  exact
                  path="/actors/update/:id"
                  component={ActorUpdate}
                />
                <PrivateRoute exact path="/actors" component={ActorsList} />
                <PrivateRoute exact path="/actors/:id" component={ActorPage} />

                <PrivateRoute
                  exact
                  path="/directors"
                  component={DirectorsList}
                />
                <PrivateRoute
                  exact
                  path="/directors/add"
                  component={DirectorAdd}
                />
                <PrivateRoute
                  exact
                  path="/directors/update/:id"
                  component={DirectorUpdate}
                />
                <PrivateRoute
                  exact
                  path="/directors/:id"
                  component={DirectorPage}
                />

                <AdminRoute exact path="/users/add" component={UserAdd} />
                <AdminRoute exact path="/users" component={UsersList} />
                <AdminRoute exact path="/users/:id" component={UserPage} />
                <AdminRoute
                  exact
                  path="/users/update/:id"
                  component={UserUpdate}
                />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/login" component={LoginPage} />
                <PrivateRoute exact path="/:id" component={MoviesList} />
                <PrivateRoute exact path="" component={MoviesList} />
              </Switch>
            </div>
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
