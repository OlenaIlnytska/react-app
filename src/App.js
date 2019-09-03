import React, {Component} from "react";
import './App.css';
import BrowserRouter from './BrowserRouter/BrowserRouter'
import { Provider } from "react-redux";
import store from "./Redux/store";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter />
            </Provider>
        )
    }
}

export default App;
