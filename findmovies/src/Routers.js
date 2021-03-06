import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movie from "./pages/Movies/Movie.js";
import Home from "./pages/Home/Home.js";

const  Routes = () =>
{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/movie/:id" component={Movie} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;