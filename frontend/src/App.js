import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from './components/User';
import axios from "axios";
import Header from './components/Menu'
import Footer from './components/Footer'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'users': []
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
    }

    render() {
        return (
            <div>
                <Header />
                <UserList users={this.state.users}/>
                <Footer />
            </div>
        );
    }
}
export default App;
