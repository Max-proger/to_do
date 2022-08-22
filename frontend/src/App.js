import logo from './logo.svg'
import './App.css'
import React from "react"
import UserList from './components/User.js'
import axios from "axios"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Menu.js'
import Footer from './components/Footer.js'
import ProjectList from './components/Project.js'
import ToDoList from './components/ToDo.js'


const NotFound404 = ({location}) => {
    return(
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response =>{
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))
//        const users = [
//            {
//                'username': 'Max',
//                'email': 'gatts@mail.ru',
//                'date_creation': '11.08.2022'
//            },
//        ]
        axios.get('http://127.0.0.1:8000/api/projects/').then(response =>{
            this.setState(
                {
                    'projects': response.data.results
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todos/').then(response =>{
            this.setState(
                {
                    'todos': response.data.results
                }
            )
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <Router>
                <Header />
                    <Switch>
                        <Route exact path='/'>
                            <UserList users={this.state.users}/>
                        </Route>
                        <Route exact path='/projects'>
                            <ProjectList items={this.state.projects}/>
                        </Route>
                        <Route exact path='/todos'>
                            <ToDoList items={this.state.todos}/>
                        </Route>
                        <Route component={NotFound404} />
                    </Switch>
                <Footer />
            </Router>
        );
    }
}
export default App;
