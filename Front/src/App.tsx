import React, {useState} from 'react';
import './App.css';
import TextField from "./components/textField/TextField";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Tasks from "./components/tasks/Tasks";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import CreateTask from "./components/createTask/CreateTask";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
    const [inputValue, setInputValue] = useState('');

    const handler = (value: string) => {
        setInputValue(value);
    }

    return <Router>
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={() => <div className="container">
                    <Title/>
                    <TextField handler={handler}/>
                    <Tasks/>
                </div>}/>
                <Route exact path="/add" component={() => <CreateTask/>}/>
                <Route exact path="/login" component={() => <Login/>}/>
                <Route exact path="/register" component={() => <Register/>}/>
            </Switch>
        </div>

    </Router>;
}

export default App;
