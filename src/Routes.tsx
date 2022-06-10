import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Users from "./Users";

const Routes = () => (
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;