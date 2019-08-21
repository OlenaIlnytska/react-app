import React, {Component} from "react";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import LogIn from "../LogIn/LogIn";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class browserRouter extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/'} exact component={Home} />
                        <Route path={'/aboutUs'} component={AboutUs}/>
                        <Route path={'/logIn'} component={LogIn}/>
                        <Route path={'/signUp'}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default browserRouter