import {Route, Switch} from "react-router-dom";
import Home from '../Pages/Home'

export default function Routes(){
    return(
        <Switch>
            <Route exact path={"/"} component={Home}/>
        </Switch>
    )
}